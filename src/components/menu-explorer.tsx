'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from 'react'
import Brand from '@/components/brand'
import Icon from '@/components/ui-icon'
import { displayPrice, menu, translate } from '@/data/menu'
import type { Language, MenuCategory } from '@/data/menu'

const totalItems = menu.reduce((sum, category) => sum + category.items.length, 0)

const normalise = (value: string) => value.toLowerCase().replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[\u200c\u0640]/g, '').trim()

const MenuExplorer = ({ language }: { language: Language }) => {
  const [active, setActive] = useState(menu[0].id)
  const [query, setQuery] = useState('')
  const [vegetarian, setVegetarian] = useState(false)
  const [source, setSource] = useState<MenuCategory | null>(null)
  const [preview, setPreview] = useState<MenuCategory | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const categoryListRef = useRef<HTMLDivElement>(null)
  const sourceRef = useRef<HTMLDialogElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const fa = language === 'fa'
  const t = (persian: string, english: string) => fa ? persian : english
  const filtering = Boolean(query.trim() || vegetarian)
  const filtered = useMemo(() => menu.map(category => ({ ...category, items: category.items.filter(item => (!vegetarian || item.vegetarian) && (!query.trim() || normalise([...item.name, ...(item.description || []), ...category.name].join(' ')).includes(normalise(query)))) })).filter(category => category.items.length), [query, vegetarian])
  const visibleCategories = filtered
  const count = filtered.reduce((sum, category) => sum + category.items.length, 0)

  useEffect(() => {
    let frame = 0
    const updateActive = () => {
      frame = 0
      const sections = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('.menu-edition') || [])
      const offset = window.innerWidth >= 700 ? 70 : 100
      const current = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1) || sections[0]
      if (current) setActive(current.id.replace('menu-', ''))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateActive) }
    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [visibleCategories])

  useEffect(() => {
    const list = categoryListRef.current
    const current = list?.querySelector<HTMLAnchorElement>('[aria-current="location"]')
    if (!list || !current) return
    const revealCurrent = () => {
      if (window.matchMedia('(min-width: 700px)').matches) return
      const viewport = list.getBoundingClientRect()
      const item = current.getBoundingClientRect()
      if (item.left >= viewport.left + 16 && item.right <= viewport.right - 16) return
      list.scrollBy({
        left: item.left + item.width / 2 - viewport.left - viewport.width / 2,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      })
    }
    revealCurrent()
    const observer = new ResizeObserver(revealCurrent)
    observer.observe(list)
    observer.observe(current)
    return () => observer.disconnect()
  }, [active, language])

  const chooseCategory = (event: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    setQuery('')
    setVegetarian(false)
    setPreview(null)
    requestAnimationFrame(() => {
      const section = document.getElementById(`menu-${id}`)
      section?.focus({ preventScroll: true })
      section?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#menu-${id}`)
    })
  }

  const movePreview = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = Math.min(Math.max(fa ? bounds.left - 105 : bounds.right + 105, 95), window.innerWidth - 95)
    const y = Math.min(Math.max(event.clientY, 110), window.innerHeight - 110)
    previewRef.current?.style.setProperty('--preview-x', `${x}px`)
    previewRef.current?.style.setProperty('--preview-y', `${y}px`)
  }

  const openSource = (category: MenuCategory) => {
    setSource(category)
    sourceRef.current?.showModal()
  }

  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-heading">
      <div className="menu-introduction"><h2 id="menu-heading" lang="en" dir="ltr">Menu<span className="menu-title-dot">.</span></h2><div><span>{t('منوی باگرو', 'Bagro Bistro')}</span><p>{t(`${menu.length.toLocaleString('fa-IR')} دسته / ${totalItems.toLocaleString('fa-IR')} آیتم`, `${menu.length} categories / ${totalItems} entries`)}</p></div></div>
      <div className="menu-tools"><div className="menu-search"><Icon name="search" /><label className="sr-only" htmlFor="dish-search">{t('جست‌وجو در غذاها و مواد اولیه', 'Search dishes and ingredients')}</label><input id="dish-search" ref={searchRef} type="search" placeholder={t('جست‌وجو در منو', 'Search the menu')} value={query} onChange={event => setQuery(event.target.value)} />{query && <button aria-label={t('پاک کردن جست‌وجو', 'Clear search')} onClick={() => {setQuery(''); searchRef.current?.focus()}}><Icon name="close" /></button>}</div><button className={`vegetarian-toggle ${vegetarian ? 'is-active' : ''}`} aria-pressed={vegetarian} onClick={() => setVegetarian(!vegetarian)}><Icon name="leaf" />{t('بدون گوشت', 'Meat-free')}<span className="filter-indicator" /></button></div>
      <div className="menu-workspace">
        <nav className="category-index" aria-label={t('دسته‌های منو', 'Menu categories')}>
          <span className="index-label">{t('دسته‌بندی', 'Categories')}</span>
          <div className="category-index-list" ref={categoryListRef}>{menu.map(category => <a href={`#menu-${category.id}`} key={category.id} className={`category-index-button ${active === category.id ? 'is-active' : ''}`} aria-current={active === category.id ? 'location' : undefined} onClick={event => chooseCategory(event, category.id)} onPointerEnter={event => {if (event.pointerType === 'mouse') {setPreview(category); movePreview(event)}}} onPointerMove={movePreview} onPointerLeave={() => setPreview(null)} onBlur={() => setPreview(null)}><span className="index-arrow"><Icon name="arrow" /></span><span>{translate(category.name, language)}</span><small>{category.items.length.toLocaleString(fa ? 'fa-IR' : 'en-US')}</small></a>)}</div>
          <a className="index-original" href="https://bagrobistro.com/" target="_blank" rel="noreferrer">{t('وب‌سایت اصلی باگرو', 'Original Bagro website')}<Icon name="arrow" /></a>
        </nav>
        <div className="menu-panel" id="menu-panel" ref={panelRef}>
          <p className="filter-status" aria-live="polite">{filtering ? t(`${count.toLocaleString('fa-IR')} نتیجه`, `${count} results`) : t('قیمت‌ها مطابق منوی اصلی', 'Prices as printed in the original menu')}</p>
          {visibleCategories.map(category => <article className="menu-edition" id={`menu-${category.id}`} tabIndex={-1} key={category.id} aria-labelledby={`heading-${category.id}`}>
            <div className="edition-cover"><span className="edition-latin" dir="ltr" lang="en" aria-hidden={fa}>{category.name[1]}</span><div className="edition-photo" aria-hidden="true">{category.id === 'italian' || category.id === 'american' || category.id === 'pasta' || category.id === 'lasagna' ? <Image src={category.image} alt="" width={240} height={300} sizes="160px" /> : <Brand />}</div></div>
            <div className="edition-meta"><h3 id={`heading-${category.id}`}>{translate(category.name, language)}</h3><button className="source-link" onClick={() => openSource(category)}>{t('برگهٔ اصلی', 'Original sheet')}<Icon name="arrow" /></button></div>
            <p className="edition-note">{translate(category.note, language)}</p>
            <ul className="dish-list" role="list">{category.items.map(item => <li key={item.id} className="dish"><div className="dish-copy"><div className="dish-title"><h4>{translate(item.name, language)}</h4>{item.vegetarian && <><Icon name="leaf" className="vegetarian-icon" /><span className="sr-only">{t('بدون گوشت', 'Meat-free')}</span></>}{item.spicy && <span className="spicy-tag">{t('تند', 'Spicy')}</span>}{item.fresh && <span className="new-tag">{t('جدید', 'New')}</span>}</div>{fa && <span className="dish-translation" lang="en" dir="ltr">{item.name[1]}</span>}{item.description && <p>{translate(item.description, language)}</p>}</div><span className={`dish-price ${!item.price ? 'price-unconfirmed' : ''}`}>{displayPrice(item.price, language)}</span></li>)}</ul>
          </article>)}
          {visibleCategories.length === 0 && <div className="empty-menu"><h3>{t('نتیجه‌ای پیدا نشد.', 'No results.')}</h3><p>{t('نام غذا یا مادهٔ اولیهٔ دیگری را جست‌وجو کنید.', 'Try another dish or ingredient.')}</p><button className="text-link" onClick={() => {setQuery(''); setVegetarian(false)}}>{t('پاک کردن فیلترها', 'Clear filters')}<Icon name="arrow" /></button></div>}
          <p className="menu-footnote">{t('موجودی روز و حساسیت‌های غذایی را با مهماندار بررسی کنید.', 'Ask your host about daily availability and food allergies.')}</p>
        </div>
      </div>
      <div className={`pointer-preview ${preview ? 'is-visible' : ''}`} ref={previewRef} aria-hidden="true">{preview && <><Image src={preview.image} alt="" width={280} height={320} sizes="260px" /><span>{t('دیدن', 'View')}<Icon name="arrow" /></span></>}</div>
      <dialog ref={sourceRef} className="source-dialog" aria-label={t('برگهٔ اصلی منو', 'Original menu sheet')}><div className="source-dialog-top"><h2>{source ? translate(source.name, language) : ''}</h2><button className="dialog-close" onClick={() => sourceRef.current?.close()} aria-label={t('بستن برگهٔ منو', 'Close menu sheet')}><Icon name="close" /></button></div>{source && <Image src={source.source} alt={t(`برگهٔ اصلی ${source.name[0]}`, `Original ${source.name[1]} sheet`)} width={2000} height={2400} sizes="(max-width: 800px) 95vw, 800px" />}<a href="https://bagrobistro.com/" target="_blank" rel="noreferrer">bagrobistro.com<Icon name="arrow" /></a></dialog>
    </section>
  )
}

export default MenuExplorer

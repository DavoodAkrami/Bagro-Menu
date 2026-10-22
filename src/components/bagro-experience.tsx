'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Brand from '@/components/brand'
import Icon from '@/components/ui-icon'
import MenuExplorer from '@/components/menu-explorer'
import ScrollTicker from '@/components/scroll-ticker'
import { mapLink } from '@/data/menu'
import type { Language } from '@/data/menu'

const BagroExperience = () => {
  const [language, setLanguage] = useState<Language>('fa')
  const navigationRef = useRef<HTMLDialogElement>(null)
  const creditsRef = useRef<HTMLDialogElement>(null)
  const fa = language === 'fa'
  const t = (persian: string, english: string) => fa ? persian : english

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = fa ? 'rtl' : 'ltr'
  }, [language, fa])

  return (
    <div id="home" className={`experience ${fa ? 'is-persian' : 'is-english'}`}>
      <svg className="brand-filters" width="0" height="0" aria-hidden="true" focusable="false"><defs><filter id="bagro-ink" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 .188 0 0 0 0 .231 0 0 0 0 .188 -3 -3 -3 0 6.3" /></filter><filter id="bagro-light" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 .965 0 0 0 0 .957 0 0 0 0 .925 -3 -3 -3 0 6.3" /></filter></defs></svg>
      <div className="opening-sequence" aria-hidden="true"><div className="opening-logo"><Brand preload /></div></div>
      <a className="skip-link" href="#menu">{t('رفتن به منو', 'Skip to menu')}</a>
      <header className="site-header"><a href="#home" className="brand-link" aria-label={t('باگرو، صفحه اصلی', 'Bagro home')}><Brand /></a><nav className="desktop-navigation" aria-label={t('ناوبری اصلی', 'Main navigation')}><a href="#menu">{t('منو', 'Menu')}</a><a href="#place">{t('فضای باگرو', 'The bistro')}</a><a href="#visit">{t('نشانی و تماس', 'Visit')}</a></nav><div className="header-actions"><button className="language-switch" onClick={() => setLanguage(fa ? 'en' : 'fa')} aria-label={t('Switch to English', 'تغییر زبان به فارسی')}>{t('EN', 'فا')}</button><button className="navigation-toggle" onClick={() => navigationRef.current?.showModal()} aria-label={t('باز کردن ناوبری', 'Open navigation')}><Icon name="menu" /></button></div></header>
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-topline"><span dir="ltr">Shiraz, Iran</span><span>{t('صبحانه / قهوه / آشپزخانه', 'Breakfast / Coffee / Cuisine')}</span></div>
          <div className="hero-stage"><div className="hero-identity"><span className="hero-cross" aria-hidden="true"><span /><span /></span><h1 id="hero-heading" lang="en" dir="ltr">Bagro<br /><span>Bistro.</span></h1><span className="hero-persian-name">{t('شیراز، معالی‌آباد', 'Shiraz, Moali Abad')}</span></div><div className="hero-space"><Image src="/images/bagro-interior.jpg" alt={t('فضای داخلی باگرو بیسترو در شیراز', 'The interior of Bagro Bistro in Shiraz')} width={768} height={1024} sizes="(max-width: 700px) 34vw, 25vw" loading="eager" /><span className="hero-image-caption" dir="ltr">Bagro / Shiraz</span></div></div>
          <ScrollTicker language={language} />
          <div className="hero-bottom"><span dir="ltr">Bistro by Ali Favakeh</span><a href="#menu">{t('مشاهدهٔ منو', 'View menu')}<Icon name="down" /></a></div>
        </section>
        <MenuExplorer language={language} />
        <section id="place" className="place-section" aria-labelledby="place-heading"><div className="place-topline"><span>{t('فضای باگرو', 'The bistro')}</span><span dir="ltr">Shiraz / Moali Abad</span></div><div className="place-composition"><div className="place-photo"><Image src="/images/bagro-interior.jpg" alt={t('گیاهان، صندلی‌های خاکستری و میزهای چوبی باگرو', 'Plants, grey chairs and wooden tables at Bagro')} width={768} height={1024} sizes="(max-width: 700px) 88vw, 45vw" /></div><div className="place-copy"><h2 id="place-heading">{t('باگرو،', 'Bagro,')}<br />{t('شیراز.', 'Shiraz.')}</h2><p>{t('معالی‌آباد، خیابان دوستان', 'Doostan Street, Moali Abad')}</p><a href="#visit" className="text-link">{t('نشانی و تماس', 'Location & contact')}<Icon name="arrow" /></a></div></div></section>
        <section id="visit" className="visit-section" aria-labelledby="visit-heading"><div className="visit-heading"><h2 id="visit-heading">{t('نشانی و تماس', 'Visit Bagro.')}</h2><a href={mapLink} target="_blank" rel="noreferrer" className="visit-round-link" aria-label={t('باز کردن نشانی باگرو در گوگل مپ', 'Open Bagro in Google Maps')}><Icon name="arrow" /></a></div><div className="visit-details"><div><p className="detail-label">{t('نشانی', 'Location')}</p><a href={mapLink} target="_blank" rel="noreferrer">{t('شیراز، معالی‌آباد، خیابان دوستان', 'Doostan Street, Moali Abad, Shiraz')}<Icon name="pin" /></a></div><div><p className="detail-label">{t('تلفن', 'Telephone')}</p><a href="tel:+987136257379"><bdi>{t('۰۷۱ ۳۶۲۵ ۷۳۷۹', '+98 71 3625 7379')}</bdi><Icon name="phone" /></a></div><div><p className="detail-label">{t('صبحانه', 'Breakfast')}</p><span>{t('۸:۳۰ تا ۱۲', '8:30–12')}</span></div></div></section>
      </main>
      <footer className="site-footer"><a href="#home" aria-label={t('بازگشت به بالای صفحه', 'Back to top')}><Brand footer /></a><span dir="ltr">Shiraz, Iran</span><button onClick={() => creditsRef.current?.showModal()}>{t('دربارهٔ منو', 'About the menu')}<Icon name="arrow" /></button></footer>
      <dialog ref={navigationRef} className="navigation-dialog" aria-label={t('ناوبری باگرو', 'Bagro navigation')}><div className="navigation-dialog-top"><Brand footer /><button className="dialog-close" onClick={() => navigationRef.current?.close()} aria-label={t('بستن ناوبری', 'Close navigation')}><Icon name="close" /></button></div><nav aria-label={t('ناوبری', 'Navigation')}>{[['#menu','منو','Menu'],['#place','فضای باگرو','The bistro'],['#visit','نشانی و تماس','Visit']].map(([href,persian,english]) => <a key={href} href={href} onClick={() => navigationRef.current?.close()}>{t(persian,english)}<Icon name="arrow" /></a>)}</nav><a className="navigation-phone" href="tel:+987136257379" dir="ltr">+98 71 3625 7379</a></dialog>
      <dialog ref={creditsRef} className="credits-dialog" aria-label={t('دربارهٔ منو', 'About the menu')}><button className="dialog-close" onClick={() => creditsRef.current?.close()} aria-label={t('بستن', 'Close')}><Icon name="close" /></button><Brand /><h2>{t('منوی باگرو', 'Bagro’s menu')}</h2><p>{t('غذاها و قیمت‌ها از منوی منتشرشدهٔ باگرو برداشته شده‌اند. قیمت‌ها با همان قالب منوی اصلی نمایش داده می‌شوند؛ موارد بدون قیمت را از مهماندار بپرسید.', 'Dishes and prices are transcribed from Bagro’s published menu. Prices retain the original format. Ask your host about unpriced items.')}</p><a href="https://bagrobistro.com/" target="_blank" rel="noreferrer">bagrobistro.com<Icon name="arrow" /></a><h3>{t('عکس‌های باگرو در گوگل مپ', 'Bagro photography on Google Maps')}</h3><p dir="ltr">Interior: adel heidari<br />Pasta: Alireza Vahedi<br />Pizza: morteza mazloumi</p><a href={mapLink} target="_blank" rel="noreferrer">{t('عکس‌ها و موقعیت', 'Photos & location')}<Icon name="arrow" /></a></dialog>
    </div>
  )
}

export default BagroExperience

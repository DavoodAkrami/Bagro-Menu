'use client'

import { useEffect, useRef, useState } from 'react'
import type { Language } from '@/data/menu'

const ScrollTicker = ({ language }: { language: Language }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const phaseRef = useRef(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    const group = groupRef.current
    const container = containerRef.current
    if (!track || !group || !container) return
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let lastTime = 0
    let lastScrollTime = performance.now()
    let lastScrollY = window.scrollY
    let boost = 0
    let speed = 32
    let width = group.getBoundingClientRect().width
    let visible = false
    let running = false

    const animate = (now: number) => {
      if (!running) return
      const delta = Math.min((now - (lastTime || now)) / 1000, 0.05)
      lastTime = now
      boost *= Math.exp(-delta * 3.5)
      speed += (32 + boost - speed) * (1 - Math.exp(-delta * 7))
      phaseRef.current = (phaseRef.current + speed * delta) % Math.max(width, 1)
      track.style.transform = `translate3d(${-phaseRef.current}px, 0, 0)`
      frame = requestAnimationFrame(animate)
    }

    const sync = () => {
      const shouldRun = visible && !paused && !motionPreference.matches && !document.hidden
      if (shouldRun === running) return
      running = shouldRun
      cancelAnimationFrame(frame)
      lastTime = 0
      if (running) frame = requestAnimationFrame(animate)
    }

    const onScroll = () => {
      const now = performance.now()
      const elapsed = Math.max(now - lastScrollTime, 16)
      const velocity = Math.abs(window.scrollY - lastScrollY) / elapsed * 1000
      boost = Math.min(340, Math.max(boost, velocity * 0.16))
      lastScrollY = window.scrollY
      lastScrollTime = now
    }

    const resize = new ResizeObserver(() => { width = group.getBoundingClientRect().width })
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync() })
    resize.observe(group)
    observer.observe(container)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('visibilitychange', sync)
    motionPreference.addEventListener('change', sync)
    return () => {
      running = false
      cancelAnimationFrame(frame)
      resize.disconnect()
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', sync)
      motionPreference.removeEventListener('change', sync)
    }
  }, [paused])

  const text = <><span lang={language}>{language === 'fa' ? 'صبحانه، قهوه و غذا' : 'Bagro Bistro'}</span><span className="ticker-separator">—</span></>

  return (
    <div ref={containerRef} className="scroll-ticker" dir="ltr">
      <div className="ticker-track" ref={trackRef} aria-hidden="true"><div ref={groupRef} className="ticker-group">{text}{text}</div><div className="ticker-group">{text}{text}</div></div>
      <button className="ticker-control" aria-pressed={paused} aria-label={language === 'fa' ? paused ? 'ادامهٔ حرکت متن' : 'توقف حرکت متن' : paused ? 'Resume moving text' : 'Pause moving text'} onClick={() => setPaused(!paused)}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>
    </div>
  )
}

export default ScrollTicker

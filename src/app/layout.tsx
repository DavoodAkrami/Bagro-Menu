import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import '@/app/globals.css'

const manrope = localFont({ src: './fonts/manrope.woff2', variable: '--font-manrope', display: 'swap' })
const priceFont = localFont({ src: './fonts/noto-sans-arabic-medium.ttf', variable: '--font-prices', display: 'swap', weight: '500' })
const vazirmatn = localFont({ src: './fonts/vazirmatn.woff2', variable: '--font-vazirmatn', display: 'swap' })

export const metadata: Metadata = {
  title: 'باگرو بیسترو | منو',
  description: 'منوی باگرو بیسترو در شیراز؛ صبحانه، قهوه، پیتزا، پاستا، نشانی و تماس.',
  robots: { index: false, follow: false },
}

export const viewport: Viewport = { themeColor: '#c9c3ae', width: 'device-width', initialScale: 1 }

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="fa" dir="rtl" className={`${manrope.variable} ${vazirmatn.variable} ${priceFont.variable}`}>
    <body>{children}</body>
  </html>
)

export default RootLayout

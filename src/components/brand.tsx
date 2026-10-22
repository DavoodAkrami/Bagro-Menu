import Image from 'next/image'

const Brand = ({ footer = false, preload = false }: { footer?: boolean; preload?: boolean }) => (
  <span className={`brand ${footer ? 'brand-footer' : ''}`}>
    <span className="brand-crop"><Image className="brand-source" src="/menu/cover.webp" alt="باگرو بیسترو، Bagro Bistro by Ali Favakeh" width={2000} height={2000} preload={preload} sizes="(max-width: 700px) 600px, 750px" /></span>
  </span>
)

export default Brand

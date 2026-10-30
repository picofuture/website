import Image from 'next/image'

import { Print } from '@/components/Print'

// Article figures are prints taped onto the sheet, auto-numbered "Fig. n".
export default function BlogImage({ src, alt, caption, ...props }) {
  return (
    <Print
      className="figure my-10!"
      label={<span className="label figure-number flex-none" />}
      caption={caption}
    >
      <Image
        src={src}
        width={1000}
        height={1000}
        alt={alt}
        sizes="(min-width: 1024px) 44rem, 100vw"
        className="h-auto w-full"
        {...props}
      />
    </Print>
  )
}

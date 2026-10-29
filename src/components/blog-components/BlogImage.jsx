import Image from 'next/image'

import { Tape } from '@/components/Tape'

// Figures sit in a frame with registration marks, taped onto the sheet like a print.
export default function BlogImage({ src, alt, caption, ...props }) {
  return (
    <figure className="figure my-10!">
      <div className="cad border border-rule-strong bg-paper-raised p-1.5">
        <Tape className="tape-tl" />
        <Tape className="tape-tr" />
        <Image
          src={src}
          width={1000}
          height={1000}
          alt={alt}
          sizes="(min-width: 1024px) 44rem, 100vw"
          className="h-auto w-full"
          {...props}
        />
      </div>
      <figcaption className="label mt-3 flex justify-between gap-6">
        <span className="figure-number flex-none" />
        {caption && <span className="text-right">{caption}</span>}
      </figcaption>
    </figure>
  )
}

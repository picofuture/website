import Image from 'next/image'

// Figures sit in a frame with registration marks, like a plate pasted onto the sheet.
export default function BlogImage({ src, alt, caption, ...props }) {
  return (
    <figure className="figure my-10!">
      <div className="cad border border-rule-strong bg-paper-raised p-1.5">
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
      {caption && (
        <figcaption className="label mt-3">{caption}</figcaption>
      )}
    </figure>
  )
}

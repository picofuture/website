import Image from 'next/image'
import cloudflareLoader from "@/lib/cloudflareImageLoader";

export default function BlogImage({ src, alt, ...props }) {
  return <>
    <Image
      loader={cloudflareLoader}
      src={src}
      width={1000}
      height={1000}
      alt={alt}
      {...props}
    />
  </>
}

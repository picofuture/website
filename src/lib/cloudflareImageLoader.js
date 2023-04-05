import {ImageLoaderProps} from 'next/image';

export const formatCDNURl = (src) => {
  return `https://cdn.picofuture.com/static/imgs/${src}`;
};

export default function cloudflareLoader({ src, width, quality }) {
  return formatCDNURl(src);
}

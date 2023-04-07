import {ImageLoaderProps} from 'next/image';

export const formatCDNURl = (src, dirPath='imgs') => {
  return `https://cdn.anfalmushtaq.com/static/${dirPath}/${src}`;
};

export default function cloudflareLoader({ src, width, quality }) {
  return formatCDNURl(src);
}

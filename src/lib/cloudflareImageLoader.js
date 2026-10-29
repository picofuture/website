export const formatCDNURl = (src, dirPath = 'imgs') => {
  return `https://cdn.anfalmushtaq.com/static/${dirPath}/${src}`
}

export default function cloudflareLoader({ src }) {
  return formatCDNURl(src)
}

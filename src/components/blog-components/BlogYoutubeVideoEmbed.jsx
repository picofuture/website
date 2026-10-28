export default function BlogYoutubeVideoEmbed({ src, title = 'YouTube video', ...props }) {
  return (
    <figure className="my-10! border border-rule-strong bg-paper-raised p-1.5">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${src}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props}
      />
    </figure>
  )
}

export default function BlogYoutubeVideoEmbed({ src, title, ...props }) {
  return <>
    <div className="text-center">
      <iframe
        className="mx-auto"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${src}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  </>
}

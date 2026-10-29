// Graphite: everything drawn on the sheet goes through these filters, so lines
// waver slightly and strokes break up on the paper's tooth. The sheet itself
// (paper, grid, rails) stays printed. Wired up in globals.css.
export function PencilFilters() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <filter
          id="pencil"
          // Headroom for the wobble on small inline blocks (links, labels).
          x="-4%"
          y="-15%"
          width="108%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          {/* A slow wobble, so long rules aren't ruler-straight. */}
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="1" seed="3" result="wobble" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="wobble"
            scale="2.2"
            xChannelSelector="R"
            yChannelSelector="G"
            result="drawn"
          />
          {/* Tooth: fine noise eats into the strokes like lead on paper. */}
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="9" result="tooth" />
          <feColorMatrix
            in="tooth"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.3 1.45"
            result="grain"
          />
          <feComposite in="drawn" in2="grain" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}

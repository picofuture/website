'use client'

import { useEffect, useState } from 'react'

// Selecting text draws over it with a highlighter pen instead of the browser's
// blue box. Native selection goes transparent once this is mounted (see
// .has-highlighter in globals.css), so without JS the default stays.

// Fragments of one line come back as separate rects; join them so the ink
// doesn't double up where they meet.
function joinLines(rects) {
  let lines = []
  for (let r of rects) {
    let line = lines.find(
      (l) => Math.abs(l.top - r.top) < 3 && r.left <= l.right + 2 && r.right >= l.left - 2,
    )
    if (line) {
      line.left = Math.min(line.left, r.left)
      line.right = Math.max(line.right, r.right)
      line.top = Math.min(line.top, r.top)
      line.bottom = Math.max(line.bottom, r.bottom)
    } else {
      lines.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom })
    }
  }
  return lines
}

export function Highlighter() {
  let [marks, setMarks] = useState([])

  useEffect(() => {
    let root = document.documentElement
    root.classList.add('has-highlighter')
    let frame = 0
    let drawn = ''

    function measure() {
      frame = 0
      let selection = document.getSelection()
      let range =
        selection && !selection.isCollapsed && selection.rangeCount
          ? selection.getRangeAt(0)
          : null
      let next = []
      if (range?.commonAncestorContainer.isConnected) {
        let rects = [...range.getClientRects()].filter((r) => r.width > 1 && r.height > 1)
        next = joinLines(rects).map((l) => ({
          left: l.left + window.scrollX,
          top: l.top + window.scrollY,
          width: l.right - l.left,
          height: l.bottom - l.top,
        }))
      }
      let key = JSON.stringify(next)
      if (key !== drawn) {
        drawn = key
        setMarks(next)
      }
      // While something is selected, keep following it: hover states,
      // images loading, scroll boxes and page navigations all move or remove
      // the text without firing selectionchange.
      if (next.length) frame = requestAnimationFrame(measure)
    }

    function update() {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    document.addEventListener('selectionchange', update)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('selectionchange', update)
      root.classList.remove('has-highlighter')
    }
  }, [])

  return (
    <div aria-hidden="true" className="highlighter">
      {marks.map((mark, i) => (
        <span
          key={i}
          style={{
            left: mark.left - 3,
            top: mark.top + mark.height * 0.1,
            width: mark.width + 6,
            height: mark.height * 0.84,
            rotate: `${((i % 3) - 1) * 0.35}deg`,
          }}
        />
      ))}
    </div>
  )
}

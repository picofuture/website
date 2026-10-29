'use client'

import { useEffect, useRef } from 'react'

const STEP = 24

// CAD cursor for the hero grid: hairlines snap to the 24px grid and a status
// readout reports the coordinates, like the bottom bar of a drafting program.
export function Crosshair() {
  let root = useRef(null)
  let readout = useRef(null)

  useEffect(() => {
    let el = root.current
    let area = el?.parentElement
    if (!el || !area) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let frame = 0
    let last = ''

    function move(event) {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        let rect = area.getBoundingClientRect()
        let x = Math.round((event.clientX - rect.left) / STEP) * STEP
        let y = Math.round((event.clientY - rect.top) / STEP) * STEP
        el.style.setProperty('--x', `${x}px`)
        el.style.setProperty('--y', `${y}px`)
        el.dataset.active = 'true'
        let text = `X ${String(x / STEP).padStart(3, '0')}  Y ${String(y / STEP).padStart(3, '0')}`
        if (text !== last && readout.current) {
          readout.current.textContent = text
          last = text
        }
      })
    }

    function leave() {
      cancelAnimationFrame(frame)
      el.dataset.active = 'false'
    }

    area.addEventListener('pointermove', move)
    area.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame)
      area.removeEventListener('pointermove', move)
      area.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <div
      ref={root}
      aria-hidden="true"
      data-active="false"
      className="crosshair pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="crosshair-h" />
      <span className="crosshair-v" />
      <span className="crosshair-grip" />
      <span ref={readout} className="crosshair-readout label">
        X 000 Y 000
      </span>
    </div>
  )
}

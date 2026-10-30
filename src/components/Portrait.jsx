import Image from 'next/image'

import { Print } from '@/components/Print'
import { person } from '@/content/site'

// The portrait plate, "Fig. A", shared by the home and about pages.
export function Portrait({ sizes, tilt, className, style }) {
  return (
    <Print
      kind="portrait"
      tilt={tilt}
      label="Fig. A"
      caption={person.location}
      className={className}
      style={style}
    >
      <Image
        src="dp.jpg"
        alt={`Portrait of ${person.name}`}
        width={640}
        height={640}
        sizes={sizes}
        className="aspect-square w-full object-cover"
        priority
      />
    </Print>
  )
}

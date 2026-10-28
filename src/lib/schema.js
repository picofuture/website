import { SITE_URL, person } from '@/content/site'

export const PERSON_ID = `${SITE_URL}/#person`

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: person.name,
  url: SITE_URL,
  image: person.image,
  jobTitle: person.jobTitle,
  email: `mailto:${person.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  sameAs: person.sameAs,
}

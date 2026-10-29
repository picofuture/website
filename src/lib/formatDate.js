export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

// Drafting-sheet date: 2026.04.06
export function formatSheetDate(dateString) {
  return dateString.slice(0, 10).replaceAll('-', '.')
}

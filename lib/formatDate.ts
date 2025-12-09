type DateStyle = 'short' | 'long'

const dateFormats: Record<DateStyle, Intl.DateTimeFormatOptions> = {
  short: { year: 'numeric', month: 'short' },
  long: { year: 'numeric', month: 'long', day: 'numeric' },
}

export function formatDate(date: string | Date, style: DateStyle = 'long'): string {
  return new Date(date).toLocaleDateString('en-US', dateFormats[style])
}

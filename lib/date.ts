export function formatDate(date: Date | string): string {
  const dateObject = new Date(date);
  return new Intl.DateTimeFormat('nb-NO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObject);
}

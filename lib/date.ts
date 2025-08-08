import { format, parseISO } from 'date-fns';
import { nb } from 'date-fns/locale';

// ToDo: include time, format to match local device's date format
export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) {
    return 'No date provided';
  }

  try {
    const date = parseISO(dateString);
    // ToDo: update to match local device's format
    return format(date, 'dd.MM.yyyy', { locale: nb });
  } catch (error) {
    console.error('Invalid date: ', error);
    return 'Invalid Date';
  }
}

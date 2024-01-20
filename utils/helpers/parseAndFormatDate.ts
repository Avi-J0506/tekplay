export default function parseAndFormatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const date: Date = new Date(dateString);
  const formattedDate: string = date.toLocaleDateString('en-US', options);

  return formattedDate.replace(/(\d+)(st|nd|rd|th),/, '$1$2').trim();
}

export function formatDate(inputDate: string | number | Date) {
  const date = new Date(inputDate);
  
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}

export default function parseAndFormatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const date: Date = new Date(dateString);
  const formattedDate: string = date.toLocaleDateString('en-US', options);

  return formattedDate.replace(/(\d+)(st|nd|rd|th),/, '$1$2').trim();
}
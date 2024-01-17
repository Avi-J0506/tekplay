export default function calculateReadingTime(desc: string): string {
  const wordsPerMinute = 200;

  const textContent = desc.replace(/<[^>]+>/g, '');

  const wordCount = textContent.split(/\s+/).length;

  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  const readingTimeString = readingTimeMinutes > 1
    ? `${readingTimeMinutes} min read`
    : '1 min read';

  return readingTimeString;
}
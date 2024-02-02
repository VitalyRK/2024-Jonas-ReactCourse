export const formatDate = (date: string | null) => {
  if (date !== null) {
    return new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    }).format(new Date(date));
  }
};

export function convertToEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + Number(char[0]));
  return String.fromCodePoint(...codePoints);
}

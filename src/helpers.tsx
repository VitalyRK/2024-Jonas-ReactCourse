export const formatDate = (date: string | Date | null) => {
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

export const flagemojiToPNG = (flag: string) => {
  // Convert flag emoji to corresponding country code
  const countryCode = [...flag]
    .map((char) =>
      String.fromCharCode(char.codePointAt(0) ?? 0 - 127397).toLowerCase()
    )
    .join('');

  // Return an image element with the country's flag
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

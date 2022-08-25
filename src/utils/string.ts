export const capitalizeString = (s: string): string => {
  if (s.length === 0) {
    return ''
  }

  return s[0].toUpperCase() + s.slice(1);
}

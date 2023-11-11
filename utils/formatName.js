export function formatString(inputString) {
  const words = inputString.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const formattedString = words.join(' ');
  return formattedString;
}
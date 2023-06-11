export default async function importData(url: string) {
  const response = await fetch(url);
  const quote = await response.json();
  return quote;
}

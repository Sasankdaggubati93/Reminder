export const KEY = "EXAMPLE:NOTES";

export function idGen() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

export function formattedResults(results) {
  return JSON.parse(results);
}

export const average = (arr: number[]): number =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

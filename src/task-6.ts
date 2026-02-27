function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // 1 (number)
console.log(getFirstElement<string>(["a", "b", "c"])); // "a" (string)
console.log(getFirstElement<boolean>([true, false, true])); // true (boolean)

console.log(getFirstElement<number | string>([1, "a"])); // 1 (number | string)

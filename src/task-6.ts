function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Явна типізація дженериків у викликах функцій
const number1 = getFirstElement<number>([1, 2, 3]); // 1 (тип number)
const string1 = getFirstElement<string>(["a", "b", "c"]); // "a" (тип string)
const boolean1 = getFirstElement<boolean>([true, false, true]); // true (тип boolean)

// Вивід результатів для перевірки
console.log(number1); // 1
console.log(string1); // "a"
console.log(boolean1); // true

const mixed = getFirstElement<number | string>([1, "a"]); // 1 (тип number | string)
console.log(mixed); // 1

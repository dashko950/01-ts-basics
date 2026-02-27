function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Явна типізація дженериків у викликах
console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"
console.log(getFirstElement<boolean>([true, false, true])); // true

// Якщо передати масив змішаного типу без вказівки дженерика – TypeScript виведе об'єднаний тип (union)
const mixed = getFirstElement([1, "a"]); // тип повернення string | number

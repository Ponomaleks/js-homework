console.log('Hello world!');

// // ================================== Задача 1 ======================================
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(itemPrice => (totalPrice += itemPrice));

  // Пиши код выше этой строки
  return totalPrice;
}
// ================================== Задача 2 ======================================
//Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  numbers.forEach(numbersElem =>
    numbersElem > value ? filteredNumbers.push(numbersElem) : false,
  );

  // Пиши код выше этой строки
  return filteredNumbers;
}
// ================================== Задача 3 ======================================
//Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(elem =>
    secondArray.includes(elem) ? commonElements.push(elem) : false,
  );

  return commonElements;
  // Пиши код выше этой строки
}

// ================================== Задача 4 ======================================
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
};

// ================================== Задача 5 ======================================
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

// ================================== Задача 6 ======================================
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
};
// Пиши код выше этой строки
// ================================== Задача 7 ======================================

// ================================== Задача 8 ======================================

// ================================== Задача 9 ======================================

// ================================== Задача 10 ======================================

// ================================== Задача 11 ======================================

// ================================== Задача 12 ======================================

// ================================== Задача 13 ======================================

// ================================== Задача 14 ======================================

// ================================== Задача 15 ======================================

// ================================== Задача 16 ======================================

// ================================== Задача 17 ======================================

// ================================== Задача 18 ======================================

// ================================== Задача 19 ======================================

// ================================== Задача 20 ======================================

// ================================== Задача 21 ======================================

// ================================== Задача 22 ======================================

// ================================== Задача 23 ======================================

// ================================== Задача 24 ======================================

// ================================== Задача 25 ======================================

// ================================== Задача 26 ======================================

// ================================== Задача 27 ======================================

// ================================== Задача 28 ======================================

// ================================== Задача 29 ======================================

// ================================== Задача 30 ======================================

// ================================== Задача 31 ======================================

// ================================== Задача 32 ======================================

// ================================== Задача 33 ======================================

// ================================== Задача 34 ======================================

// ================================== Задача 35 ======================================

// ================================== Задача 36 ======================================

// ================================== Задача 37 ======================================

// ================================== Задача 38 ======================================

// ================================== Задача 39 ======================================

// ================================== Задача 40 ======================================

// ================================== Задача 41 ======================================

// ================================== Задача 42 ======================================

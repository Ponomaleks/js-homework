console.log('Hello world!');
// // ================================== Задача 1 / 32 ======================================
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// // ================================== Задача 2 / 32 ======================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!';
//
// }

// ================================== Задача 3 / 32 ======================================

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }
// console.log(checkStorage(70, 0));

// // ================================== Задача 4 / 32 ======================================

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// // ================================== Задача 5 / 32 ======================================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// // ================================== Задача 6 / 32 ======================================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[3] = 'banana';
// // ================================== Задача 7 / 32 ======================================

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;
// ================================== Задача 8 / 32 ======================================

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ================================== Задача 9 / 32 ======================================

// function getExtremeElements(array) {
//   // Change code below this line
//   console.log(array[0]);
//   console.log(array[array.length - 1]);
//   return [array[0], array[array.length - 1]];
// }
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// // ================================== Задача 10 / 32 ======================================

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);

//   return words;
// }

// // ================================== Задача 11 / 32 ======================================
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   return message.split(' ').length * pricePerWord;
// }
// // ================================== Задача 12 / 32 ======================================
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimeter);

//   return string;
// }
// ================================== Задача 13 / 32 ======================================
// function slugify(title) {
//   return (slug = title.toLowerCase().split(' ').join('-'));

//   // Change code above this line
// }
// console.log(slugify('Ten secrets of JavaScript'));

// // ================================== Задача 14 / 32 ======================================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// // ================================== Задача 15 / 32 ======================================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// // ================================== Задача 16 / 32 ======================================
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length <= maxLength) {
//     return newArray;
//   }

//   return newArray.slice(0, maxLength);

//   // Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 2));

// // // ================================== Задача 17 / 32 ======================================
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// // ================================== Задача 18 / 32 ======================================

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum = sum + i;
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(10));
// // // ================================== Задача 19 / 32 ======================================

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// // // ================================== Задача 20 / 32 ======================================

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (i = 0; i <= order.length - 1; i += 1) {
//     total = total + order[i];
//   }

//   // Change code above this line
//   return total;
// }

// // ================================== Задача 21 / 32 ======================================
// function findLongestWord(string) {
//   // Change code below this line

//   const arrow = string.split(' ');
//   let wordlength = 0;
//   let word;
//   for (i = 0; i <= arrow.length - 1; i += 1) {
//     if (arrow[i].length > wordlength) {
//       wordlength = arrow[i].length;
//       word = arrow[i];
//     }
//   }
//   console.log(word);
//   return word;

//   // Change code above this line
// }
// findLongestWord('Google do a roll');
// // // ================================== Задача 22 / 32 ======================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(14, 17);

// // ================================== Задача 23 / 32 ======================================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;

//   // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 38);
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// // // ================================== Задача 24 / 32 ======================================

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }

// // ================================== Задача 25 / 32 ======================================
function getCommonElements(array1, array2) {
  // Change code below this line
  const commonElements = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  return commonElements;
  // Change code above this line
}
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // ================================== Задача 26 / 32 ======================================
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const item of order) {
    total += item;
  }

  // Change code above this line
  return total;
}

// // ================================== Задача 27 / 32 ======================================
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const item of numbers) {
    const number = item;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

// // ================================== Задача 28 / 32 ======================================
// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
// // ================================== Задача 29 / 32 ======================================

// // ================================== Задача 30 / 32 ======================================

// // ================================== Задача 32 / 32 ======================================

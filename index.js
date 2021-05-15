// ================================== Задача 1 / 36 ======================================
// Change code below this line

const productName = 'Droid';
const pricePerItem = 2000;

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// ================================== Задача 2 / 36 ====================================== //
let productName = 'Droid';
let pricePerItem = 2000;

// Change code below this line

productName = 'Repair droid';
pricePerItem += 1500;
// ================================== Задача 3 / 36 ======================================
// Change code below this line

const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;
// ================================== Задача 4 / 36 ======================================
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

// ================================== Задача 5 / 36 ======================================
const productName = 'Droid';
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// ================================== Задача 6 / 36 ======================================
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// ================================== Задача 7 / 36 ======================================
// Change code below this line
function sayHi() {
  console.log('Hello, this is my first function!');
}
sayHi();
// ================================== Задача 8 / 36 ======================================
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
// ================================== Задача 9 / 36 ======================================
function add(a, b, c) {
  // Change code below this line

  return a + b + c;

  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
// ================================== Задача 10 / 36 ======================================
function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

// ================================== Задача 11 / 36 ======================================
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}

// ================================== Задача 12 / 36 ======================================
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}

// ================================== Задача 13 / 36 ======================================
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}
// ================================== Задача 14 / 36 ======================================
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}
// ================================== Задача 15 / 36 ======================================
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

// ================================== Задача 16 / 36 ======================================
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available >= ordered) {
    message = 'Order is processed, our manager will contact you.';
  } else {
    message = 'Not enough goods in stock!';
  }
  // Change code above this line
  return message;
}

// ================================== Задача 17 / 36 ======================================
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// ================================== Задача 18 / 36 ======================================
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;

  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}

// ================================== Задача 19 / 36 ======================================
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    // Change this line
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
// ==================================  ======================================

// ==================================  ======================================

// ==================================  ======================================

// ==================================  ======================================

// ==================================  ======================================

// ==================================  ======================================

// ==================================  ======================================

// ==================================  ======================================

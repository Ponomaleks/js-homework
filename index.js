console.log('Hello world!');

// // ================================== Задача 1 ======================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// // ================================== Задача 2 ======================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// // ================================== Задача 3 ======================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// // ================================== Задача 4 ======================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// // ================================== Задача 5 ======================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// ================================== Задача 6 ======================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment);
// // ================================== Задача 7 ======================================
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };
// // ================================== Задача 8 ======================================
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line

//   name,
//   price,
//   image,
//   tags,

//   // Change code above this line
// };
// // ================================== Задача 9 ======================================
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code above this line
// };
// // ================================== Задача 10 ======================================
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// // ================================== Задача 11 ======================================
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// // ================================== Задача 12 ======================================
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// // ================================== Задача 13 ======================================
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (key of keys) {
//   values.push(apartment[key]);
// }

// // ================================== Задача 14 ======================================
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);

//   for (key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// // ================================== Задача 15 ======================================
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// ================================== Задача 16 ======================================
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const salaryValues = Object.values(salaries);

  for (value of salaryValues) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}

// ================================== Задача 17 ======================================
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

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

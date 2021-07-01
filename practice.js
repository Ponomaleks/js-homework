import usersArr from './data.js';
console.log(usersArr);

// // // Task 1

// // // Получить массив имен всех пользователей (поле name).
// // // console.log(getUserNames(usersData))
// // // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // const getUserNames = arr => arr.map(user => user.name);

// // console.log(getUserNames(usersArr));

// // Task 2

// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// // console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersWithEyeColor = (arr, color) =>
//   arr.filter(({ eyeColor }) => eyeColor === color);
// console.log(getUsersWithEyeColor(usersArr, 'blue'));

// // Task 4

// // Получить массив только неактивных пользователей (поле isActive).
// // console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getInactiveUsers = users => users.filter(user => !user.isActive);
// console.log(getInactiveUsers(usersArr));

// Task 5

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);
// console.log(getUserWithEmail(usersArr, 'elmahead@omatom.com'));


// // Task 6

// // Получить массив пользователей в возрасте от min до max

// // console.log( getUsersWithAge( users, 20, 30 ) );
// // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// // console.log( getUsersWithAge( users, 30, 40 ) );
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const getUsersWithAge = (users, min, max) =>
//   users.filter(user => user.age >= min && user.age <= max);
// console.log(getUsersWithAge(usersArr, 20, 30));
// // Task 7

// // Получить общую сумму баланса (поле balance) всех пользователей.
// // console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = users =>
//   users.reduce((total, user) => user.balance + total, 0);

// console.log(calculateTotalBalance(usersArr));

// // Task 8

// // Массив имен всех пользователей у которых есть друг с указанным именем.
// // console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// // console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// // Task 9

// // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// // console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const getNamesSortedByFriendsCount = users =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);

// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
    
console.log(getSortedUniqueSkills(users));
[ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

const getSortedUniqueSkills = 


// // Task 11

// // Дополни функцию getTotalBalanceByGender(users, gender, maxAge) так, чтобы она возвращала
// // общий баланс пользователей (свойство balance), пол которых
// // (свойство gender) совпадает со значением параметра gender и возраст которых меньше, чем maxAge.

// // Task 12

// // На входе массив чисел, например: arr = [1,2,3,4,5].
// // Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// // Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// // в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// // То есть:
// // для arr = [ 1, 2, 3, 4, 5 ]
// // getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// // Функция не должна модифицировать входной массив.
// // В решении используйте метод arr.reduce.

// const getSums = arr => {
//   let prevNum = 0;
//   return arr.reduce((acc, elem) => {
//     acc.push((prevNum += elem));
//     return acc;
//   }, []);
// };

const getSums = arr =>
  arr.reduce(
    (acc, num, i) => (i === 0 ? [num] : [...acc, acc[i - 1] + num]),
    [],
  );

console.log(getSums([1, 2, 3, 4, 5]));

console.log('Hello world!');

// // // ================================== Задача 1 ======================================
// // Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(itemPrice => (totalPrice += itemPrice));

//   // Пиши код выше этой строки
//   return totalPrice;
// }
// // ================================== Задача 2 ======================================
// //Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(numbersElem =>
//     numbersElem > value ? filteredNumbers.push(numbersElem) : false,
//   );

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// // ================================== Задача 3 ======================================
// //Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// // Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach(elem =>
//     secondArray.includes(elem) ? commonElements.push(elem) : false,
//   );

//   return commonElements;
//   // Пиши код выше этой строки
// }

// // ================================== Задача 4 ======================================
// // Стрелочные функции.
// // Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// // Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };

// // ================================== Задача 5 ======================================
// // Неявный возврат
// // Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки

// // ================================== Задача 6 ======================================
// // Стрелочные функции как коллбеки
// // Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// // Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };
// // Пиши код выше этой строки
// // ================================== Задача 7 ======================================
// // Задача. Фильтрация массива чисел 2.0
// // Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number =>
//     number > value ? filteredNumbers.push(number) : false,
//   );

//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// // ================================== Задача 8 ======================================
// // Задача. Общие элементы 2.0
// // Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element =>
//     secondArray.includes(element) ? commonElements.push(element) : false,
//   );

//   // Пиши код выше этой строки
//   return commonElements;
// };

// ================================== Задача 9 ======================================
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// const changeEven = (numbers, value) => {
//   // Пиши код ниже этой строки
//   const arr = [];
//   numbers.forEach(elem =>
//     elem % 2 === 0 ? arr.push(elem + value) : arr.push(elem),
//   );
//   return arr;
//   // Пиши код выше этой строки
// };

// // ================================== Задача 10 ======================================
// // Метод map()
// // Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(palnet => palnet.length);

// // ================================== Задача 11 ======================================
// // Метод map() и массив объектов
// // Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);
// // ================================== Задача 12 ======================================
// // Метод flatMap()
// // Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг(свойство genres) из массива книг books.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);

// // ================================== Задача 13 ======================================
// // Задача. Имена пользователей
// // Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// let users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Пиши код ниже этой строки
// const getUserNames = users => users.map(user => user.name);
// // Пиши код выше этой строки

// // ================================== Задача 14 ======================================

// // Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей(свойство email) из массива объектов в параметре users.
// // Пиши код ниже этой строки
// const getUserEmails = users => users.map(user => user.email);
// // Пиши код выше этой строки
// // ================================== Задача 15 ======================================
// // Методы filter и find
// // Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 == 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// // ================================== Задача 16 ======================================
// // Фильтрация уникальных элементов
// // Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );

// // ================================== Задача 17 ======================================
// // Метод filter() и массив объектов
// // Используя метод filter() дополни код так, чтобы:

// // В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// // В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// // ================================== Задача 18 ======================================
// // Задача. Пользователи с цветом глаз
// // Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };
// // Пиши код выше этой строки

// // ================================== Задача 19 ======================================
// // Задача. Пользователи в возрастной категории
// // Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };
// // Пиши код выше этой строки

// // ================================== Задача 20 ======================================
// // Задача. Пользователи с другом

// // Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
// // Пиши код выше этой строки

// ================================== Задача 21 ======================================
// Задача. Список друзей
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// // Пиши код ниже этой строки
// const getFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index);
// };
// // Пиши код выше этой строки

// // ================================== Задача 22 ======================================
// Задача. Активные пользователи
// // Пиши код ниже этой строки
// const getActiveUsers = users => {
//   return users.filter(user => user.isActive === true);
// };
// // Пиши код выше этой строки

// // ================================== Задача 23 ======================================
// Задача.Неактивные пользователи

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive === false);
// };
// // Пиши код выше этой строки

// // ================================== Задача 24 ======================================
// // Метод find()
// // Используя метод find() дополни код так, чтобы:

// // В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// // В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// // ================================== Задача 25 ======================================
// // Задача. Пользователь с почтой

// // Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого(свойство email) совпадает со значением параметра email.

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// };
// // Пиши код выше этой строки

// // ================================== Задача 26 ======================================
// // Метод every()

// // Используя метод every() дополни код так, чтобы:

// // В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// // В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// // В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// // В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// // В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// // В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(elem => elem %2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(elem => elem %2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(elem => elem %2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(elem => elem %2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(elem => elem %2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(elem => elem %2 !== 0);

// // ================================== Задача 27 ======================================
// // Задача. Все ли пользователи активны

// // Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// const isEveryUserActive = users => users.every(user => user.isActive)

// // ================================== Задача 28 ======================================
// // Метод some()

// // Используя метод some() дополни код так, чтобы:

// // В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// // В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// // В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// // В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// // В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// // В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
// // Тесты

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(el => el %2 ===0);
// const anyElementInFirstIsOdd = firstArray.some(el => el %2 !==0);

// const anyElementInSecondIsEven = secondArray.some(el => el %2 ===0);
// const anyElementInSecondIsOdd = secondArray.some(el => el %2 !==0);

// const anyElementInThirdIsEven = thirdArray.some(el => el %2 ===0);
// const anyElementInThirdIsOdd = thirdArray.some(el => el %2 !==0);

// // ================================== Задача 29 ======================================
// // Задача. Есть ли активные пользователи
// // Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// // Пиши код ниже этой строки
// const isAnyUserActive = users => users.some(user => user.isActive);
// // Пиши код выше этой строки

// // ================================== Задача 30 ======================================
// // Метод reduce()

// // Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор.Немного сложнее других в усвоении, но результат стоит того.

// // Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((prevValue, playtime) => {return prevValue + playtime}, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// // ================================== Задача 31 ======================================
// // Метод reduce() и массив объектов
// // Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {return total + player.playtime / player.gamesPlayed}, 0);

// // ================================== Задача 32 ======================================
// // Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// // Пиши код ниже этой строки
// const calculateTotalBalance = users =>
//    users.reduce((totalBalance, user) => {return totalBalance + user.balance}, 0);
// // Пиши код выше этой строки
// ================================== Задача 33 ======================================

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Пиши код ниже этой строки
// const getTotalFriendCount = users =>
//   users.reduce((friendsCount, user) => {
//     return friendsCount + user.friends.length;
//   }, 0);
// // Пиши код выше этой строки
// console.log(getTotalFriendCount(users));

// // ================================== Задача 34 ======================================
// // Метод sort()
// // Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// // ================================== Задача 35 ======================================
// // Свой порядок сортировки чисел
// // Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// // ================================== Задача 36 ======================================
// // Свой порядок сортировки строк
// // Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт',
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// // ================================== Задача 37 ======================================
// // Сортировка объектов
// // Дополни код так, чтобы:

// // В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// // В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// // В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// // В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author),
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author),
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating,
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating,
// );

// // ================================== Задача 38 ======================================
// // Задача.Сортировка по балансу
// // Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users =>
//   [...users].sort((user1, user2) => user1.balance - user2.balance);
// // Пиши код выше этой строки
// // ================================== Задача 39 ======================================
// // Задача. Сортировка по количеству друзей
// // Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users =>
//   [...users].sort(
//     (user1, user2) => user2.friends.length - user1.friends.length,
//   );
// // Пиши код выше этой строки
// // ================================== Задача 40 ======================================
// // Задача. Сортировка по имени
// // Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// // Пиши код ниже этой строки
// const sortByName = users =>
//   [...users].sort((user1, user2) => user1.name.localeCompare(user2.name));
// // Пиши код выше этой строки
// ================================== Задача 41 ======================================
// Цепочки методов (чейнинг, chaining)

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// let names = books => {
//   names = [...books]
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .sort((a, b) => a.localeCompare(b));
// };

// // ================================== Задача 42 ======================================
// // Задача. Пользователи и друзья
// // Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
// // Пиши код выше этой строки
// // ================================== Задача 43 ======================================
// // Задача.Имена друзей
// // Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.

// // Пиши код ниже этой строки
// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// // Пиши код выше этой строки
// // ================================== Задача 44 ======================================
// // Задача. Общий баланс
// // Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((totalBalance, user) => {
//       return totalBalance + user.balance;
//     }, 0);
// // Пиши код выше этой строки
// ================================== Задача 45 ======================================

// ================================== Задача 46 ======================================

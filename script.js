//TASK

// 1. Створити функції getData, за допомогою fetch + promise chaining, яка прийматиме параметр url, яким потрібно зробити запит і повертає отримане значення.

// Використовуйте https://jsonplaceholder.typicode.com/posts

// 2. Додайте всередину функції фільтрацію вихідного значення.

// Наприклад: відфільтрувати масив, щоб залишилися дані користувача з "userId": 1

console.log(fetch('https://jsonplaceholder.typicode.com/posts')
.then(object => object.json())
.then(json => json.filter(obj => obj.userId == 1)))
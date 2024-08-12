// Task 1: Adding and Removing Elements

let fruits = ['apple', 'banana', 'orange'];

fruits.push('grape');
console.log(fruits);

fruits.pop();
console.log(fruits);




// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);
console.log(numbers);




// Task 3: Applying Array Methods
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


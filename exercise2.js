const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => {
    return num * num;
})

console.log("squared numbers: ", squaredNumbers); // Output: [1, 4, 9, 16, 25]

const evens = numbers.filter(num => {
    return num % 2 === 0;
})

console.log("even numbers: ", evens); // Output: [2, 4]

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Sum: ", sum); // Output: 15
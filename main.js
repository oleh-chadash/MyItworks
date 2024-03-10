// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.splice(1, 2);

// numbers[3] = 1;

// numbers.splice(-4, 4);

// numbers.unshift(0);

// console.log(numbers);

// Создаем объекты для двух людей с использованием let

// let p1 = {
//     name: "Jill",
//     age: 25,
//     city: "Moscow"
// };

// let p2 = {
//     name: "Robert",
//     age: 25,
//     city: "Jerusalem"
// };

// if (p1.age === p2.age) {
//     if (p1.city === p2.city) {
//         console.log(`Jill wanted to date Robert`);
//     } else {
//         console.log(`Jill wanted to date Robert, but couldn’t`);
//     }
// }

// let library = {
//     books: [
//         { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
//         { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
//         { title: "Ulysses", author: "James Joyce" }
//     ]
// };

// console.log(library);

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
};

const name = prompt('Please enter the name for your reservation').toLowerCase();

if (reservations[name]) {
    if (!reservations[name].claimed) {
        console.log(`Welcome, ${name}`);
    } else {
        console.log(`Hmm, someone already claimed this reservation`);
    }
} else {
    console.log(`You have no reservation`);
    reservations[name] = { claimed: true };
    console.log(`We have added a reservation for you, ${name}`);
}

// const fruits = ["apple", "orange", "banana"];

// const checkFruit = (fruitsArray, fruitSrt) => {
//   return fruitsArray.includes(fruitStr);
// };

const randomnumbers = [2, 5, 8, 4, 3];

function greaterNumber(array, num) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > num) {
      result.push(array[index]);
    }
  }
  return;
}

console.log(greaterNumber(randomnumbers, 4));

function greaterNumber2(array, num) {
  return array.filter((value) => value > num);
}

console.log(greaterNumber2(randomnumbers, 4));

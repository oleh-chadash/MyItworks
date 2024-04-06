const startValue = 1;

Promise.resolve()
  .then(function a() {
    return Promise.resolve(+startValue + 5)
      .then(function d(result) {
        return result * 3;
      })
      .then(function e(result) {
        return result - 2;
      });
  })
  .then(function c(result) {
    console.log("Результат:", result);
  })
  .catch(function b(error) {
    console.log("Произошла ошибка:", error);
  });

Promise.resolve("Hello!")
  .then(function (catchStr) {
    return catchStr.toUpperCase();
  })
  .then(function (reverseStr) {
    return reverseStr.split("").reverse().join("");
  })
  .then(function (addStr) {
    console.log(addStr + "-finished");
  })
  .catch(function (error) {
    console.error("Error:", error.message);
  });

function compareToNum({ num, isAboveNum }) {
  return new Promise((resolve, reject) => {
    if (isAboveNum > num) {
      resolve(`${isAboveNum} is greater than ${num}`);
    }
    resolve(`${isAboveNum} is not greater than ${num}`);
  });
}

compareToNum({ num: 10, isAboveNum: 5 })
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

compareToNum({ num: 10, isAboveNum: 12 })
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000)
  .then(() => {
    console.log("Hello");
    return delay(1000);
  })
  .then(() => {
    console.log("World!");
  });

const jsonData = '{"name": "John", "age": 30}';

const parseJSON = new Promise((resolve) => {
  resolve(jsonData);
});

parseJSON.then((data) => {
  try {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
  } catch (error) {
    console.log("Invalid JSON");
  }
});

function resolveImmediate() {
    return Promise.resolve(25);
  }
  
  function resolveDelayed() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(17);
      }, 2000);
    });
  }
  
  function combine(prmX, prmY) {
    return Promise.all([prmX, prmY]).then((values) => {
      return values[0] + values[1];
    });
  }
  
  combine(resolveImmediate(), resolveDelayed())
    .then((sum) => {
      console.log(sum);
    });
  
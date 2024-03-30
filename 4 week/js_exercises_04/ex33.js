// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
// function getSumOfEven(arr){
// return arr[2] + arr[4] + arr[6] + arr[8] +
// arr[10];
// }
// getSumOfEven([1,2,3,4,5,6,7,8,9,10]);


function getSumOfEven(arr){
    // Initialize sum of even-indexed elements
    let sum = 0;
    
    // Loop through the array, starting from the second element (index 1),
    // and increment by 2 to get the next even-indexed element
    for (let i = 1; i < arr.length; i += 2) {
      sum += arr[i];
    }
  
    // Return the calculated sum
    return sum;
  }
  
  // Test the function with an array of size 10
  getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // This should return 30
  
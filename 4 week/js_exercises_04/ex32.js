// function findSmallest(a, b, c){
// if (a > b > c){
// return c;
// } else if (a > c > b) {
// return a;
// } else {
// return b;
// }
// }
// findSmalest(52,66, 2);


function findSmallest(a, b, c){
    // Check if 'a' is smaller than both 'b' and 'c'
    if (a < b && a < c){
      return a;
    } 
    // Check if 'b' is smaller than both 'a' and 'c'
    else if (b < a && b < c) {
      return b;
    } 
    // If neither 'a' nor 'b' is the smallest, 'c' must be the smallest
    else {
      return c;
    }
  }
  
  // Correct function call with the proper function name
  findSmallest(52, 66, 2);
  
  
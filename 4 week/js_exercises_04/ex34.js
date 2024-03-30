// function calcAverage (arr){
// var sum ;
// for ( var i = 0 ; i < arr .length; i ++ ){
// sum += arr [ i ];
// } return sum ;
// }
// calcAverage ([ 85 , 90 , 92 ]);


function calcAverage(arr) {
    // Initialize the sum with an initial value of 0
    var sum = 0;
  
    // Sum up all elements in the array
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    // Return the average value by dividing the sum by the number of elements in the array
    return sum / arr.length;
  }
  
  // Test the function with the given array
  calcAverage([85, 90, 92]); // Should return the average value (85 + 90 + 92) / 3 = 89
  
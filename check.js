// The Luhn Algorithm is used to validate various identitifcation numbers,
// such as credit card numbers and social insurance numbers.

// // Write a function check, which, given a number,
// returns whether it is valid or not (according to the Luhn Algorithm).

// // Before you begin, write a test (or multiple) for
// the function (using mocha and chai). If you find you need to create
// other functions to help with the task, write tests for them too

// Luhns algorithm

// var numbers = [7, 9, 9, 2 ,7, 3, 9, 8, 7, 1];

// 16 digit limit 2^53
// var num =  1234567890123456;

// // var arr = Array.from(String(num), x => x + x);
// // console.log(arr);
// // var arr2 = Array.of(num);
// // console.log(arr2);

// var arr3 = [1,23,3,54,5,56,7,45];

// console.log(arr3);

// var filtered = arr3.forEach(function(numbers, index, arr) {
//   var newArr = [];
//   newArr.push(numbers = numbers * 2);
//   console.log(newArr);
//   console.log(numbers);
// });

// // var filtered = arr3.filter(function(value, index, arr){
// //   if(value > 9) {
// //     return index;
// //   }});
// console.log(filtered);

// var arr4 = [1,2,3,4,5,6,7].fill(6*6);
// console.log(arr4);
// var iterator = arr4.entries()
// for (let e of iterator) {
//   console.log(e);}

// var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// var removed = myFish.splice(0, 2, ...args);
// console.log(myFish);
// console.log(removed);

// function check(num) {
  // array of strings
//   var numbers = String(num).split("");
//   console.log(numbers);

//   // From the rightmost(From
//   var checkDigit = numbers[numbers.length - 1]

//   //console.log(checkDigit);
//   //aa digit, which is the check digit, and moving left,
//   //-- reading backwards/decrementing
//   // double the value of every second digit. If the result of this doubling
//   doubleEverOther = [];
//   for (var second = numbers.length - 1; second >= 0; second-=2) {
//     //console.log(numbers[second]);
//     var everySecondDigit = numbers[second];
//     var product = everySecondDigit * 2;
//     doubleEverOther.push(product);
//     // /console.log(product);
//   }
//   console.log(`doubleEverOther`, doubleEverOther);

//   // Take the sum of all the digits.
// //   // var sum = 0;
// //   // numbers.forEach(function(number){
// //   // sum += number;
// //   // return sum;
// //   // })
// //   // operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of
// // if( product > 9 ) {
// //   everySecondDigit + 2;
// // }

//   sumDigits = [];
//   for (var i = 0; i < doubleEverOther.length; i++) {
//     if(doubleEverOther[i] > 9 ) {
//      //var minus 9
//       sumDigits.push(doubleEverOther[i] - 9);
//     }
//     console.log(`sumDigits`, sumDigits);
//   }


// // the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) else/ or
// // alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).
// else if (product < 9){
// (everySecondDigit * 2) - 9;
// }}


// }

// If the total modulo 10 is equal to 0
// (if the total ends in zero) then the number
// is valid according to the Luhn formula; else it is not valid.
// return (sum % 10 === 0);;
//  }

// check(num);

var numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

// returns an array with everysecond digit multiplied by two
function everySecondDigit(arr) {

  var doubleEverOther = arr;
  //console.log(doubleEverOther);
  // var checkDigit = numbers[numbers.length - 1]
  //console.log(checkDigit);

  //aa digit, which is the check digit, and moving left,
  //-- reading backwards/decrementing
  // double the value of every second digit. If the result of this doubling
  for (var i = doubleEverOther.length - 1; i>= 0; i = i - 2) {
    //console.log(doubleEverOther[i]);
    doubleEverOther[i] = doubleEverOther[i] * 2;
  }
  //console.log(doubleEverOther);
  return doubleEverOther;
}

//everySecondDigit(numbers);

// returns a sum of digits after check
function sumDigits(arr) {
  var sumAfterDouble = arr;
  // loop through the doubled array
  for (var i = sumAfterDouble.length - 1; i>= 0; i = i - 2) {
    // check if everySecondDigit is > 9
    // if yes subtract 9
     if(sumAfterDouble[i] > 9 ) {
      sumAfterDouble[i] = sumAfterDouble[i] - 9;
    }
  }
  console.log(sumAfterDouble)
  return sumAfterDouble;
}

sumDigits(everySecondDigit(numbers));









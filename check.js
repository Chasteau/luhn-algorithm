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



var numbers = [1, 2, 3, 4,5, 6, 7, 8, 9, 0, 1,2,3,4,5,6];
var account = "1234567890123456";

// checks if input is a number if yes, split to array.
function toNum(arg){
  var numbers = arg;

  if (typeof numbers === 'string') {
    numbers = String(numbers).split("").map(Number);
    // numbers.forEach(function stringToNum(strings){
    //   Number(strings);
    // for(i = 0; i < numbers.length; i++) {
    //      numbers = Number(numbers[i]);
    //      console.log(numbers);
    // }
//     numbers.forEach(function(value) {
//     if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
//     return Number(value);
//   return NaN;
// });
    //numbers = numbers.map(Number);

      //console.log(numbers);
    // });
    //console.log(numbers);
    return numbers;
  } else {
    return arg;
  }
}

//toNum(account);
//toNum(numbers);


// returns an array with everysecond digit multiplied by two
function everySecondDigit(arr) {
  var doubleEverOther = toNum(arr);

  // double the value of every second digit. If the result of this doubling
  for (var i = doubleEverOther.length - 1; i>= 0; i = i - 2) {
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

 //everySecondDigit(account);
//everySecondDigit(numbers);
// sumDigits(everySecondDigit(account));
// sumDigits(everySecondDigit(numbers));

function sum(arr) {
  /* IMPLEMENT ME */
  var total = 0;
  var counter = 0;
  while (counter < arr.length) {
    total += arr[counter];
    counter++;
  }
  console.log(total);
  return total;
}

sum(sumDigits(everySecondDigit(account)));
sum(sumDigits(everySecondDigit(numbers)));




function check(num) {
  var numbers = toNum(num);
  console.log(numbers);
  var doubledNums = everySecondDigit(numbers);
  console.log(doubledNums);
  var SumNums = sumDigits(doubledNums);
  console.log(SumNums);
  // set checkDigit to be sum of SumNum array
  var checkDigit = sum(SumNums);
  console.log(checkDigit);

// If the total modulo 10 is equal to 0
// (if the total ends in zero) then the number
// is valid according to the Luhn formula; else it is not valid.
return (checkDigit % 10 === 0);;
 }

console.log(check(numbers));
console.log(check(account));









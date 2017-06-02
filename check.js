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
var num =  1234567890123456;


function check(num){



  // array of strings
  var numbers = String(num).split("").join("")
  //console.log(number);


// From the rightmost(From
var checkDigit = numbers[numbers.length - 1]

//console.log(checkDigit);
// digit, which is the check digit, and moving left,
//-- reading backwards/decrementing
// double the value of every second digit. If the result of this doubling
for (var second = numbers.length - 1; second >= 0; second-=2) {
  //console.log(numbers[second]);
  var everySecondDigit = numbers[second];
  var product = everySecondDigit * 2;
  //console.log(product);

  // Take the sum of all the digits.
var sum = 0;
numbers.forEach(function(number){
sum += number;
return sum;
})


  // operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of
if( product > 9 ) {
  everySecondDigit + 2;
}
// the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) else/ or
// alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).
else if (product < 9){
(everySecondDigit * 2) - 9;
}}


}



// If the total modulo 10 is equal to 0
// (if the total ends in zero) then the number
// is valid according to the Luhn formula; else it is not valid.
return (sum % 10 === 0);;
 }

check(num);











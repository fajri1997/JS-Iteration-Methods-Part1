//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const numbers = [10, 13, 20, 25, 38, 35, 40];

const greaterThanOrEqualTo25 = numbers.filter((numbers) => numbers >= 25);

console.log(greaterThanOrEqualTo25);

const containingNumbersThatAreDivisibleBy5 = numbers.filter(
  (numbers) => numbers % 5 === 0
);
console.log(containingNumbersThatAreDivisibleBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/
// const numbers = [10, 13, 20, 25, 38, 35, 40];

const eachNumberSquared = numbers.map((numbers) => numbers * numbers);

console.log(eachNumberSquared);

const numberMultipliedBy2 = numbers.map((numbers) => numbers * 2);
console.log(numberMultipliedBy2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const numberFilter20 = numbers
  .filter((numbers) => numbers >= 20)
  .map((numbers) => numbers * numbers);

console.log(numberFilter20);

const divisibleBy5MultiplyBy3 = numbers
  .filter((number) => number % 5 === 0)
  .map((numbers) => numbers * 3);
console.log(divisibleBy5MultiplyBy3);

// test
//🌶️🌶️🌶️ Extra not required

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

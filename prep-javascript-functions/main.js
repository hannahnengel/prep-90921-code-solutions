function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('Sum: ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var HoursToMinutes = convertHoursToMinutes(2);
console.log('Minutes: ', HoursToMinutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var greeting = getGreeting('World');
console.log('Greeting: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var multiplicationAndSumBy5 = addAndMultiplyBy5(10, 5);
console.log('Add and multiply by 5: ', multiplicationAndSumBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtraction = subtractTwoNumbers(22, 7);
console.log('Subtraction:', subtraction);

function getCircleCircumference(radius) {
  return 2 * (Math.PI * radius);
}
var circumference = getCircleCircumference(5);
console.log('Circle Circumference: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('Full Name: ', fullName);

function cube(number) {
  return Math.pow(number, 3);
}
var cubedresult = cube(5);
console.log('Cubed Result: ', cubedresult);

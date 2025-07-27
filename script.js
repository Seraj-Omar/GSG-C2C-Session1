let name="Seraj",age=19,student=true,gpa=81.2

console.log(name,typeof name);
console.log(age,typeof age);
console.log(student,typeof student);
console.log(gpa,typeof gpa);


name=prompt("Enter your name");
alert("Hello, " + name);

console.log("5" + 1); // 51
console.log("5" - 1); // 4 
console.log(true + 1); // 2 
console.log(false + "false"); // falsefalse 
console.log(null + 1); // 1

//it will convert the number into a string and append it to the string
//it will convert the string into a number and subtract 1 from it
//it will convert the boolean true into one and add it to 1 
//it will convert the first false into a string and append it to the second string
//it will convert the null into a number (0) and add it to 1

let birthYear = prompt("Enter your birth year");
alert("You are " + (2025 - birthYear) + " years old");

//used the function Number() to convert the input from string to number
let n1 = Number(prompt("Enter the first number"));
let n2 = Number(prompt("Enter the second number"));

console.log("Sum = " + (n1 + n2));
console.log("Difference = "+(n1 - n2));
console.log("Product = "+(n1 * n2));
console.log("Division = "+(n1 / n2));
console.log("Remainder = "+(n1 % n2));
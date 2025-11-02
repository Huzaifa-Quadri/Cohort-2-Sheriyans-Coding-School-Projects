// //8.Print multiplication table of 5
// for (let index = 1; index <= 10; index++) {
//   console.log(`5 * ${index} = ${5 * index}`);
// }

// //9. Count how many numbers between 1 and 15 are greater than 8
// for (let index = 1; index <= 15; index++) {
//   if (index > 8) {
//     console.log(index);
//   }
// }

// //10.Ask user for password and print access status
// let password = "testing123";
// let input = prompt("Enter Password");
// if (input !== null && input.trim() === password) {
//   console.log("Access Granted");
// } else {
//   console.log("Password is Empty or Incorrect");
// }

// //11. Allow only 3 attempts to enter correct password
// let password = "testing123";
// let count = 1;
// while (count < 4) {
//   let input = prompt("Enter Password");
//   if (input !== null && input.trim() === password) {
//     console.log("Access Granted");
//     break;
//   } else {
//     console.log("Password is Empty or Incorrect");
//     count++;
//   }
// }
// if (count === 4) {
//   console.log(
//     "Login Attempt Limit Reached\n-----------Account locked-----------"
//   );
// }

// // 12. Ask user for words until they type “stop”. Count how many times they typed “yes”

// let word = prompt("Enter the word");
// let countYes = 0;
// while (word.toLowerCase() !== "stop") {
//   word = prompt("Enter the word");
//   if (word.toLowerCase() === "yes") {
//     countYes++;
//   }
// }
// console.log(`Yes is counted ${countYes} times`);

// //13. Print numbers divisible by 7 from 1 to 50
// for (let num = 1; num <= 50; num++) {
//   if (num % 7 == 0) {
//     console.log(num);
//   }
// }

// //14. Sum of all odd numbers from 1 to 30
// let sum = 0;
// for (let num = 1; num <= 30; num++) {
//   sum += num;
// }
// console.log(sum);

// //15. Keep asking number until user enters an even number
// let num = +prompt("Enter a number");
// while (num % 2 !== 0) {
//   num = +prompt("Enter a number");
// }

// //16. Print numbers between two user inputs
// let no1 = +prompt("Enter Number 1");
// let no2 = +prompt("Enter Number 2");
// for (let index = no1; index <= no2; index++) {
//   console.log(index);
// }

// //17. Print only first 3 odd numbers from 1 to 20
// let c = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     c++;
//   }
//   if (c === 3) {
//     break;
//   }
// }

// //18. Ask user 5 numbers. Count how many are positive
// let pos = 0;
// let n = 5;
// while (n > 0) {
//   input2 = +prompt("Enter positive or negative number");
//   if (input2 > 0) {
//     pos++;
//   }
//   n--;
// }
// console.log(pos);

// //19. ATM Simulator – Allow 3 withdrawals
// // Start with ₹1000 balance. Ask withdrawal amount 3 times.
// // If enough balance → deduct

// let wd = 3;
// let bal = 1000;
// while (wd > 0) {
//   let amt = +prompt("Enter amount to withdraw ");
//   if (amt === null || amt === 0) {
//     console.log("Enter a valid amount");
//   }
//   if (amt > bal) {
//     console.log("Not Enought bal, Enter a lower amount");
//   } else {
//     bal -= amt;
//     console.log("Account debited by ", amt);
//     console.log("Current Balance ", bal);
//     console.log("");
//     wd--;
//   }
// }

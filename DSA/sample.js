var a = "A";

for (let i = 0; i < 5; i++) {
    console.log(String.fromCharCode(65+i));
}

// @Huzaifa class Solution {
//     prime_factors(nStr) {
//         let n = Number(nStr);

//         if (n === 0 || n === 1) {
//             return "No prime factors";

//         }

//         // Handle factor 2
//         while (n % 2 === 0) {
//             console.log(2);
//             n = n / 2;
//         }

//         // Handle odd factors
//         for (let i = 3; i * i <= n; i += 2) {
//             while (n % i === 0) {
//                 console.log(i);
//                 n = n / i;
//             }
//         }

//         // If remaining number is prime
//         if (n > 1) {
//             return n
//         }
//     }
// }

// module.exports = Solution; try this approach
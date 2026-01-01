let prompt = require("prompt-sync")();
let n = 5;


// function pattern1(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }
//         console.log();
//     }
// }
// pattern1(n);

// function printRightTriangleNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write(j+" ");
//         }
//     console.log();
//     }
// }
// printRightTriangleNumbers(n);


// function pattern2(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }
    
//         for (let j = 2*(n-i); j >= 1; j--) {
//             process.stdout.write("  ");
//         }

//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }

//     console.log();
//     }
// }
// pattern2(n);

// function pattern3(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }
    
//         for (let j = 2*(n-i); j >= 1; j--) {
//             process.stdout.write("  ");
//         }

//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }

//     console.log();
//     }

//     for (let i = n; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }

//         for (let j = 2*(n-i); j >= 1; j--) {
//             process.stdout.write("  ");
//         }

//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }

//     console.log();
//     }
// }
// pattern3(n);


// function pattern4(n) {
//     for (let i = 1; i <= n; i++) {

//         for (let j = n; j >= i; j--) {
//             process.stdout.write(" ");
//         }
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }
//         console.log();
//     }
// }
// pattern4(n);

// function pattern5(n) {
//     for (let i = 1; i <= n; i++) {

//         for (let j = 1; j <= n; j++) {
//             if (i === j || i +j === n+1) {
//                 process.stdout.write("* ");
//             }else{
//                 process.stdout.write("  ");
//             }
//         }
//         console.log();
//     }
// }
// console.log("Pattern 5 :");
// pattern5(n);

// function pattern6(n) {
//     for (let i = 1; i <= n; i++) {

//         for (let j = 1; j <= n; j++) {
//             if () {
                
//             }
//         }
//         console.log();
//     }
// }
// console.log("Pattern 6 :");
// pattern6(n);

function pattern_vshape_type1(n){
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                process.stdout.write("*");
            }else{
                process.stdout.write(" ");
            }
        }
    
        for (let j = (n-i); j >= 1; j--) {
            process.stdout.write("  ");
        }

        // for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        

        console.log();
    }
}
pattern_vshape_type1(n);

function vshape_type2(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < 2*n; j++) {
            if (i === j || 2*n === i+j) {
                process.stdout.write("*");
            }else{
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}
vshape_type2(n);


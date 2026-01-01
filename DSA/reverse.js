let prompt = require("prompt-sync")();

var n = +prompt("Enter the number : ");
var num = 0;
while (n>0) {
    var r = n%10;
    
    num = num * 10 + r;

    n = parseInt(n/10);
}
console.log(num);
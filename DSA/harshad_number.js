let prompt = require("prompt-sync")();
var nStr = +prompt("Enter the number : "); 
var ans = sumdigits(nStr);

if (nStr % ans === 0) {
    console.log("Harshad Number");
}else{
    console.log("Not Harshad Number");
}

console.log(ans);

function sumdigits(m){
    var sum = 0;
    while(m>0){
            var r = m % 10;
            sum = sum + r;
            
            m = parseInt(m/10);
        }
        
        return sum;
    }
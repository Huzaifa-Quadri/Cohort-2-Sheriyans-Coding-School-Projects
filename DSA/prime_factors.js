let nStr = 60;
if (nStr <= 1) {
    console.log("No prime factors");
}

for(var i = 2; i < nStr; i++){
    if(nStr % i === 0 && isPrime(i)){
        console.log(i);
    } 
}

function isPrime(n){
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    
    return true;
}
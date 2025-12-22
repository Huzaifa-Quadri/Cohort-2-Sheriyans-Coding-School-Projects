











let p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve();
    }, 4000);
})

p.then()
var data = fetch("https://randomuser.me/api/?results=5")
.then((res) => {
    // console.log(res);

    //? Now data is in body which is ReadableStream which cant be read now so we have to convert this raw data in Stream.

    return res.json();

    //? This way we have to return the json converted data and acccess it in another then ->
}).then((data) => {
    //* For Single generated user ->
    // console.log(data.results[0].name);
    
    //* For Multiple generated users ->
    data.results.forEach(element => {
        console.log(element);
    })
}).catch((err) => {
    console.log("Some Error Occured -> \n",err);
})


//!  Why after converting raw data to json it is not printing the data
// .then((raw) => {
//     console.log(raw.json());
//     //? -> As raw.json() is a promise, we have to use then to access the data
//     //? -> raw.json() returns a promise    
// })






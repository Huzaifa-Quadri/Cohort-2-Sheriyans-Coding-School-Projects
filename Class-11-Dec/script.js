// weather api = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//We have to use this -
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}

let apikey = "d1a59c139119084fac2d9b7fdea5bf0c";

async function getWeather(city) {

    try{
        /*
        //then method 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).
        then((raw) => raw.json()).
        then((data) => console.log(data));
        */
        
        //With await
        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        
        if (!raw.ok) {
            throw new Error("City Not Found");
        }

        let realdata = await raw.json();

        console.log(realdata);
    }catch(error){
        console.log("Something went wrong");
    }

}

getWeather("Indore");

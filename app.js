// //async will return promise 
// //fetch("api_url") hum ek api call karte hain jo server se data fetch karega 
// //await wait till api don't respond 

// //response.json(): API ka data JSON format mein hota hai,
// // usse JavaScript object mein convert karne ke liye ye method 
// // use hota hai.


// //step1 basic function 
// async function getWeather(){
//     const response =await fetch("api_url");
//     const data=await response.json();
//     console.log(data);
// }

// //Step 2: Dynamic Input Handling
// //Ab user ke input ko handle karne ke liye ek input 
// // field aur button HTML mein banate hain aur JavaScript
// //  mein value fetch karte hain.

// async function getWeather(){
//     const city =document.getElementById('city').value;
//     const apikey="you api key";
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     const response=await fetch(url);
//     const data=await response.json();
//     console.log(data);
// }

// //Step 3: Displaying Data
// //Ab hum console ke jagah HTML mein data display karenge.

// async function  getWeather(){
    
//     const city=document.getElementById('city').value;
//     const apikey="you api key";
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


//     const response=await fetch(url);
//     const data=await response.json();
//     console.log(data);
    

//     //data display
//     const weatherDataDiv=document.getElementById('weather-data');
//     weatherDataDiv.innerHTML=`
//       <h3>Weather in ${city}</h3>
//         <p>Temperature: ${data.main.temp}°C</p>
//         <p>Condition: ${data.weather[0].description}</p>
//     `;
// }

// //step4 error handling

// async function  getWeather(){
    
//     const city=document.getElementById('city');
//     const apikey="you api key";
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try{
//         const response=await fetch(url);
//         if(!response.ok){
//             throw new Error("city not found");
//         }

    
    
//     const data=await response.json();
//     console.log(data);
    

//     //data display
//     const weatherDataDiv=document.getElementById('weather-data');
//     weatherDataDiv.innerHTML=`
//       <h3>Weather in ${city}</h3>
//         <p>Temperature: ${data.main.temp}°C</p>
//         <p>Condition: ${data.weather[0].description}</p>
//     `;
//     }catch(error){
//         const weatherDataDiv=document.getElementById('weather-data');
//         weatherDataDiv.innerHTML=`<p>Error: ${error.message}</p>`;
//     }
// }


// Step 5: Final Polishing
// Ab hum ek loading spinner ya message add karte hain jab tak data fetch
//  ho raha ho.

    async function getWeather() {
        const city = document.getElementById('city').value;
        const weatherDataDiv = document.getElementById('weather-data');

        if(!city){
            weatherDataDiv.innerHTML="Please enter a city.";
            return;
        }

        const apiKey = "53393c4dd5b834463d0e3f4130b3de23";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        weatherDataDiv.innerHTML = "Fetching weather data..."; // Loading message
    
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("City not found");
            }

            // const temperature = data.main.temp;
            // const weatherDescription = data.weather[0].description;
            // const humidity = data.main.humidity;
    
            const data = await response.json();
            weatherDataDiv.innerHTML = `
                <h3>Weather in ${city}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        } catch (error) {
            weatherDataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }  

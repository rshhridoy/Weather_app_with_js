const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector(".weatherinput");
const card = document.querySelector(".card");
const apiKey = ""; //Enter Apikey here

weatherForm.addEventListener('submit', async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherInfo(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter a City");
    }
})

async function getWeatherInfo(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    const response = await fetch(apiurl);
    console.log(response);
    if(!response.ok){
        throw new Error("Please Enter a valid City");
    }
    else{
        return await response.json();
    }
}

const displayWeatherInfo = (data) => {
    const {name : city, main : {temp, humidity}, weather :[{id, description}]} = data;


    // city Name
    const cityDisplay = document.createElement('h1');
    cityDisplay.textContent = city;
    cityDisplay.classList.add("title");

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(cityDisplay);

    // temp
    const tempDisplay = document.createElement('p');
    tempDisplay.textContent = `${(temp - 273).toFixed(1)}°C`;
    tempDisplay.classList.add('temperature');

    card.appendChild(tempDisplay);

    // humidity
    const humDisplay = document.createElement("p");
    humDisplay.textContent = `Humidity : ${humidity}%`;
    humDisplay.classList.add("humidity");

    card.appendChild(humDisplay);

    // Description
    const descDisplay = document.createElement('p');
    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");

    card.appendChild(descDisplay);

    // WeatherEmoji

    const emojiDisplay = document.createElement('p');
    emojiDisplay.textContent = emojiInfo(id);
    emojiDisplay.classList.add("weatherimg");

    card.appendChild(emojiDisplay);
}

const emojiInfo = (weatherId) => {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "Thunderstorm ⛈️";
        case weatherId >=300 && weatherId < 400:
            return "Drizzle 🌧️";
        case weatherId>= 500 && weatherId < 600:
            return "Rain ☔";
        case weatherId >=600 && weatherId < 700:
            return "Snow ❄️";
        case weatherId>= 700 && weatherId < 800:
            return "Atmosphere 🌫️";
        case weatherId ==800:
            return "Clear ☀️";
        case weatherId> 800 && weatherId < 900:
            return "Cloudy ☁️";
    
        default:
            return "No weather found!!";
    }
}

const displayError = (message) =>{
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');


    card.textContent = '';
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
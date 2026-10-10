const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector(".weatherinput");
const card = document.querySelector(".card");
const apiKey = "96a59546b2500324b6005c230f1032c6";

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
    console.log(data)
}

const displayError = (message) =>{
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');


    card.textContent = '';
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
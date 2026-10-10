const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector(".weatherinput");
const card = document.querySelector(".card");


weatherForm.addEventListener('submit', event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){

    }
    else{
        displayError("Please Enter a City");
    }
})

const displayError = (message) =>{
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');


    card.textContent = '';
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
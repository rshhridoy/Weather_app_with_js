# 🌦️ Weather App

A simple and interactive **Weather App** built using **HTML, CSS, and JavaScript**. The application allows users to search for a city and retrieve its current weather information using the OpenWeatherMap API.

The app displays the city's name, temperature in Celsius, humidity, weather description, and a weather emoji based on the current conditions.

## 🌤️ Live Weather Search

Enter a city name and click **Get Weather** to view its current weather information.

### Weather Information

- 🌍 City name
- 🌡️ Temperature in Celsius
- 💧 Humidity percentage
- ☁️ Weather description
- 🌈 Weather condition emoji
- ⚠️ Error messages for invalid cities or empty input

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display temperature in Celsius
- 💧 Show current humidity
- 🌤️ Display weather descriptions
- ⛈️ Weather emojis based on weather condition codes
- ⚠️ Error handling for invalid city names and failed requests
- 🎨 Gradient weather card design
- 🖱️ Interactive search button with hover effects
- ⚡ Asynchronous API requests using `async/await`
- 🌐 Fetch real-time weather data from OpenWeatherMap

## 🛠️ Technologies Used

- **HTML5** — Structure of the application
- **CSS3** — Styling, layout, gradients, and hover effects
- **JavaScript (ES6)** — Application logic and DOM manipulation
- **Fetch API** — Retrieve weather data from an external API
- **OpenWeatherMap API** — Provide current weather information

## 📂 Project Structure

```text
weather-app/
│
├── index.html
├── style.css
└── script.js
```

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### 2. Open the project folder

```bash
cd weather-app
```

### 3. Get an API key

1. Visit [OpenWeatherMap](https://openweathermap.org/api).
2. Create an account or sign in.
3. Obtain an API key for the Current Weather Data API.

### 4. Configure the API key

Open `script.js` and replace the empty API key with your own:

```javascript
const apiKey = "YOUR_API_KEY";
```

### 5. Run the application

Open `index.html` in your browser, or use the **Live Server** extension in VS Code to run the project locally.

Enter a city name and click **Get Weather** to test the application.

## 🧠 JavaScript Concepts Practiced

This project helped me practice several JavaScript concepts:

- Variables and constants
- Functions and arrow functions
- `async` and `await`
- Promises and asynchronous programming
- `fetch()` API
- HTTP response handling with `response.ok`
- `try...catch` error handling
- Template literals
- Object destructuring and renaming properties
- Nested object and array destructuring
- Conditional statements
- `switch` statements
- `document.querySelector()`
- `document.createElement()`
- `classList.add()`
- `addEventListener()`
- `event.preventDefault()`
- `textContent` and `appendChild()`
- DOM manipulation
- Dynamic HTML generation
- Working with JSON data
- Using external APIs

## 📸 Screenshots

<img width="1916" height="863" alt="Screenshot 2026-10-11 032551" src="https://github.com/user-attachments/assets/6f286226-8e08-45a1-8842-f0d83e5c1e37" />


## 🔮 Future Improvements

Possible improvements for future versions:

- 📱 Improve mobile responsiveness
- 🌡️ Add Celsius and Fahrenheit conversion
- 🌅 Display sunrise and sunset times
- 💨 Show wind speed and atmospheric pressure
- 📍 Add current-location weather detection
- 🕒 Add recent city search history
- 🌦️ Display a multi-day weather forecast
- 🎨 Add dark and light modes
- ⏳ Add a loading indicator while fetching weather data
- 🖼️ Add dynamic backgrounds based on weather conditions

## 👨‍💻 Author

**RSHridoy**

This project was created as part of my journey to improve my **HTML, CSS, and JavaScript** skills, particularly in asynchronous programming, API integration, and DOM manipulation.

---

⭐ If you like this project, consider giving the repository a star!

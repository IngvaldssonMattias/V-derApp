import { getWeatherFromCity } from "./services.js";


const searchButton = document.getElementById('search-button');
const searchField = document.getElementById('search-field');
const weatherResult = document.getElementById('weather-result');

searchButton.addEventListener('click', async () => {
    const city = searchField.value;
    console.log(`Söker väder för stad: ${city}`);
    const weather = await getWeatherFromCity(city)

    weatherResult.innerHTML =`<p>Today at ${weather.time} ${weather.timeZone} in ${weather.city[0].toUpperCase()+weather.city.slice(1)} the temperature is ${weather.temperature} degrees celsius and the weather is ${weather.weather.toLowerCase()}.</p>`

});


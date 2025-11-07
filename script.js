import { getWeatherFromCity } from "./services.js";


const searchButton = document.getElementById('search-button');
const searchField = document.getElementById('search-field');

searchButton.addEventListener('click', async () => {
    const city = searchField.value;
    console.log(`Söker väder för stad: ${city}`);
   const weather = await getWeatherFromCity(city)
   console.log(weather)
});


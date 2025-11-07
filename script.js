import { getCityCordinates, getTemperature } from "./services.js";


const searchButton = document.getElementById('search-button');
const searchField = document.getElementById('search-field');

searchButton.addEventListener('click', () => {
    const city = searchField.value;
    console.log(`Söker väder för stad: ${city}`);
    getCityCordinates(city)
});


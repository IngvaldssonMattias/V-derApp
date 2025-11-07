import { createCordinatesURL, createTemperatureURL } from "./url.js";

export  async function getCityCordinates(city) {
    const response = await fetch(createCordinatesURL(city))
    if (!response.ok) throw new Error(console.log('Got HTTP-error ', response.status))
    const data = await response.json();
    console.log(data);
    
}

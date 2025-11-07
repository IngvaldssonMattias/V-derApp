import { createCordinatesURL, createTemperatureURL } from "./url.js";
import { weatherCodes } from "./weatherCodes.js";

export async function getWeatherFromCity(city) {
  const response = await fetch(createCordinatesURL(city));
  if (!response.ok)
    throw new Error(console.log("Got HTTP-error ", response.status));
  const data = await response.json();

  let latitude = data.results[0].latitude;
  let longitude = data.results[0].longitude;

  return await getTemperature(latitude,longitude, city)

}
async function getTemperature(lat, lon, city) {
  const response = await fetch(createTemperatureURL(lat, lon));
  if (!response.ok)
    throw new Error(console.log("Got HTTP-error ", response.status));
  const data = await response.json();

    const weatherData = {
        city: city,
        temperature: data.current.temperature_2m,
        weather: weatherCodes[data.current.weather_code],
        time: data.current.time,
        timeZone: data.timezone }

  //console.log(`Today at ${time} ${timeZone} in ${city[0].toUpperCase()+city.slice(1)} the temperature is ${temperature} degrees celsius and the weather is ${weatherCodes[weatherCode].toLowerCase()}`)
  return weatherData 
}

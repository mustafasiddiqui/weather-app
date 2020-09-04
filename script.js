
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const uri = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(uri);

  return weatherPromise.then((response) => {
    return response.json();
  })

}


searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then(response => {
    showWeatherData(response);
  })
    .catch(error => {
      console.log(error);
    })
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  //  console.log('Showing: ' + JSON.toString(weatherData));
  const city = weatherData.name;
  let minTemp = weatherData.main.temp_min;
  let maxTemp = weatherData.main.temp_max;
  let weatherType = weatherData.weather[0].description;
  let temp = weatherData.main.temp;

  document.getElementById('city-name').innerText = city;
  document.getElementById('weather-type').innerText = weatherType;
  document.getElementById('temp').innerText = temp;
  document.getElementById('min-temp').innerText = minTemp;
  document.getElementById('max-temp').innerText = maxTemp;
}

const onEnter = (e) => {
  if ("Enter" === e.key) {
    searchCity();
  }
}



const searchBox = document.querySelector(".city-input");
const searchButton = document.querySelector(".button");
const weathericon = document.querySelector(".weather-icon");

async function getWeather(city) {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API.APIKEY);

  if(response.status == 404) {
    document.querySelector(".weather-info").style.display = 'none';
    document.querySelector(".error").style.display = "block";
  }else{

  }

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";

  weathericon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"

  document.querySelector(".weather-info").style.display = "block";
}

const getWeatherButton = document.querySelector('.search button');
getWeatherButton.addEventListener('click', () => {
  const city = document.querySelector('.city-input').value;
  getWeather(city);
});



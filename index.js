const apikey = "166faa08eddd9d1be75e808dfe47c9f5";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".unit").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if (data.weather[0].main == "Clouds") {
      weathericon.src = "/img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "/img/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "/img/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "/img/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "/img/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkweather(searchinput.value);
});

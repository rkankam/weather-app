let appContainer = document.querySelector(".container-weatherApp");
let heroCity = document.querySelector(".title-hero-city");
let heroTemp = document.querySelector(".num-hero");
let heroLogo = document.querySelector(".weatherLogo");
let heroWeather = document.querySelector(".actualWeather-text");
let searchButton = document.querySelector(".search-button");
let searchField = document.querySelector("#searchField");

// EVENT LISTENERS

searchButton.addEventListener("click", () => {
  displaySearch();
});

searchField.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    search(searchField.value);
  }
});

// FUNCTIONS

function displaySearch() {
  searchField.style.display = "block";
  searchButton.style.display = "none";
}

function search(city) {
  fetch(
    `http://api.weatherstack.com/forecast?access_key=dbfc2048c5619e9b71280886e7957020&query=${city}&hourly=1`
  )
    .then((res) => res.json())
    .then((data) => {
      let weatherCode = data.current.weather_code;
      if (data.location.country == "United States of America") {
        heroCity.textContent = data.location.name + ", USA";
      } else {
        heroCity.textContent = data.request.query;
      }
      heroTemp.textContent = data.current.temperature + "°";
      heroWeather.textContent = data.current.weather_descriptions[0];
      heroLogo.src = `./img/icon-weather/day/${weatherCode}.svg`;
      searchField.value = "";
    })
    .catch((err) => console.error(err));
}

search("Paris");

console.log("https://github.com/rkankam");

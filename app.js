const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7ec7ee7e1amshfd29ba66b6293b3p14cd85jsn7d1371371416",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

let currentWeather;
let country = document.querySelector("button");
let temp = document.querySelector("h1");
let humidity = document.querySelector(".data h2:nth-child(2)");
let loc =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_M6leaRwBJoAXfzKoVzHTxqEy92PhQ&ipAddress";
async function getData(city) {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const res = await fetch(url, options);
  const data = await res.json();
  currentWeather = data;
  country.innerText = currentWeather.name;
  temp.innerText = currentWeather.main.temp;
  humidity.innerText = currentWeather.main.humidity;
}

async function getLocation() {
  let res = await fetch(loc);
  let data = await res.json();
  getData(data.location.city);
}

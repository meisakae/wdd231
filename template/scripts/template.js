const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const mylat = "49.75"
const mylon = "6.64"
const mykey = "608b7f92f31daaabdc8abad43fe4fd2c"

const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(myurl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.error("Error fetching weather data:", error);
  }
}

function displayResults(data) {
  console.log('hello')
  currentTemp.textContent = `${data.main.temp}`
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  let desc = data.weather[0].description
  weatherIcon.setAttribute('src', iconsrc)
  weatherIcon.setAttribute('alt', data.weather[0].description)
  captionDesc.textContent = `${desc}`
}
apiFetch();

const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//Toggle the show class off and on

navbutton.addEventListener('click', ()=> {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

//Weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const mylat = "43.05"
const mylon = "-87.92"
const mykey = "608b7f92f31daaabdc8abad43fe4fd2c"

const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=imperial`; 

//current weather
async function apiFetch() {
  try {
    const response = await fetch(myurl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw new Error(await response.text());
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

//forecast
async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

function displayForecast(data) {
  const days =["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday","Saturday"];
  const forecastElements = document.querySelectorAll(".forecast-temp");

  let count = 0;
  for (let i = 0; i < data.list.length && count < 3; i++) {
    const forecast = data.list[i];

    if (forecast.dt_txt.includes("12:00:00")) {
      const data = new Date(forecast.dt_txt);
      const dayName = days[data.getDay()];
      const temp = forecast.main.temp.toFixed(1);

      forecastElements[count].textContent = `${dayName}: ${temp}`;
      count++;
    }
  }
}
fetchForecast();

//JSON file//
const url =  'data/members.json';

const cards = document.querySelector('#members');
const spotlightContainer = document.querySelector('#spotlights');


async function getMembersData(){
  try {
    const response = await fetch(url);
    const data = await response.json();
        //console.table(data);
    if (cards) displayMembers(data);
    if (spotlightContainer) displaySpotlights(data);
  } catch(error) {
    console.error("Error fetching member data:", error);
  }
}

getMembersData();



const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        card.classList.add('card');

        let name= document.createElement('h3');
        name.textContent = member.name;

        let image= document.createElement('img');
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', `${member,name} logo`);
        image.setAttribute('loding', 'lazy');
        image.setAttribute('width', '230');
        image.setAttribute('height', '200');

        let address= document.createElement('p');
        address.textContent = `📍${member.addresses}`;

        let phone= document.createElement('p');
        phone.textContent = `📞${member.phone}`;
        
        let website= document.createElement('a');
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = "🔗Visit Website";


        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
       
        cards.appendChild(card);
    });
};

//Spotlight
function displaySpotlights(members) {
  //const spotlightContainer = document.querySelector('#spotlights');
    if(!spotlightContainer) {
      console.error("Spotlight container not found!");
      return;
    }

  const eligible = members.filter(m => m.membership === "gold" || m.membership === "silver");
  const selected = shuffleArray(eligible).slice(0,3);

  selected.forEach((member) => {
    const card = document.createElement('section');
    card.classList.add('spotlight');

    const name = document.createElement('h3');
    name.textContent = member.name;

    const image = document.createElement('img');
    image.setAttribute('src', `images/${member.image}`);
    image.setAttribute('alt', `${member.name}logo`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '180');
    image.setAttribute('height', '200');

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const addresses = document.createElement('p');
    addresses.textContent = member.addresses;

    const website = document.createElement('a');
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');
    website.textContent = "Visist Website";

    const level = document.createElement('p');
    level.textContent = `Membership Level: ${member.membership}`;

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(addresses);
    card.appendChild(website);
    card.appendChild(level);

    spotlightContainer.appendChild(card);
  });
}

function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

//getMembersData();

const gridbutton = document.getElementById('gridbutton');
const listbutton = document.getElementById('listbutton');
const display = document.getElementById('members');

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener('click', () => {
	// example using arrow function
	display.classList.add('grid-view');
	display.classList.remove('list-view');
});

listbutton.addEventListener('click', () => {
    display.classList.add('list-view');
	display.classList.remove('grid-view');
});

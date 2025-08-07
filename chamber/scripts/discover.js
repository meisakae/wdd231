import { places } from '../data/places.mjs';
console.log(places)

const main = document.querySelector('.discover-grid');

places.forEach((place,index) => {
    const card = document.createElement('section');
    card.classList.add('card', `card${index + 1}`);

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
        <Image src="${place.image}" alt="${place.name}" loding="lazy" width="300" height="200"
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
    `;

    main.appendChild(card);
})

const visitMsg = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
const msToDays = 86400000;

if(!lastVisit) {
    visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - Number(lastVisit)) / msToDays);

    if(days < 1) {
        visitMsg.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        visitMsg.textContent = "You last visited 1 days ago.";
    } else {
        visitMsg.textContent = `You last visited ${days} days ago`;
    }

}

localStorage.setItem("lastVisit", now);

const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//Toggle the show class off and on

navbutton.addEventListener('click', ()=> {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

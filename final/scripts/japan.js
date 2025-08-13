const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//Toggle the show class off and on

navbutton.addEventListener('click', ()=> {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
 function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    if(slides) slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 4000);

//main element//
async function getCardsData() {
    try {
        const response = await fetch('data/japan.json');
        const data = await response.json();

        const container = document.getElementById('cardcontainer');
        if (container) {
            data.forEach(card => {
                container.innerHTML += `
                <div class="card-container">
                    <img src="${card.img}" alt="${card.alt}" width="300" height="200">
                    <h3>${card.title}</h3>
                    <p>${card.desc}</p>
                </div>`;
            });
        }
    } catch (error) {
        console.error("Error fetching cards data.", error);
    }
}

getCardsData();
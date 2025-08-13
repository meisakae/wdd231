const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//Toggle the show class off and on

navbutton.addEventListener('click', ()=> {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

const history = document.querySelector(".cards-history");
const culture = document.querySelector(".cards-culture");
const food = document.querySelector(".cards-food");

const dialog = document.getElementById("tripBox");
const dialogContent = document.querySelector(".dialog-content");
const closeBtn = document.getElementById("closeButton")

function getStarRating(rating) {
    const fullStars = Math.floor(rating); // ★ の数
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // ☆ 半分
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) + (halfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}


async function getCardsData() {
    try {
        const respose = await fetch('data/trips.json');
        const data = await respose.json();

        data.forEach(card => {
            const cardHTML = `
                <article class="card">
                    <img src="${card.image}" alt="${card.alt}" loading="lazy" width="300" height="200">
                    <h3>${card.title}</h3>
                    <p class="rating">rating${getStarRating(card.rating)} (${card.rating})</p>
                    <p>${card.shortDesc}</p>
                    <button class="more-info" data-id="${card.id}">More Info</button>
                </article>`;

            if (card.category === "history") {
                history.innerHTML += cardHTML;
            } else if (card.category === "culture") {
                culture.innerHTML += cardHTML;
            } else if (card.category === "food") {
                food.innerHTML += cardHTML;
            }
        });

        //dialog button//
        document.querySelectorAll(".more-info").forEach((btn,index) => {
            btn.addEventListener("click", () => {
                const card = data[index];
                dialogContent.innerHTML = `
                     <h2>${card.title}</h2>
                    <img src="${card.image}" alt="${card.alt}" width="300" height="200">
                    <p><strong>Price:</strong> ${card.price}</p>
                    <p><strong>Address:</strong> ${card.address}</p>
                    <p><strong>Activities:</strong> ${card.activities}</p>`
                dialog.showModal();
            });
        });

        closeBtn.addEventListener("click", () => {
            dialog.close();
        });

    } catch (error) {
        console.error("Error fetching cards data.", error);
    }
}

getCardsData();
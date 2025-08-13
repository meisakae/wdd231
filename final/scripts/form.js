const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//Toggle the show class off and on

navbutton.addEventListener('click', ()=> {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

document.getElementById('timestamp').value = new Date().toISOString();

async function loadTours() {
    try {
        const response = await fetch('data/trips.json');
        const data = await response.json();

        const categories = {
            history: data.filter(item => item.category === 'history'),
            culture: data.filter(item => item.category === 'culture'),
            food: data.filter(item => item.category === 'food')
        };

        for (const [key, item] of Object.entries(categories)) {
            const select = document.getElementById(key);
            if (!select) continue;

            item.forEach(item => {
                const option = document.createElement('option');
                option.value = item.title;
                option.textContent = item.title;
                select.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error loading tours:', error);
    }
}

loadTours();
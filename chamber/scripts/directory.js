const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//Toggle the show class off and on

navbutton.addEventListener('click', ()=> {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

//JSON file//
const url =  'data/members.json';
const cards = document.querySelector('#members');

async function getMembersData(){
        const response = await fetch(url);
        const data = await response.json();
        //console.table(data);
        displayMembers(data);
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
}

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
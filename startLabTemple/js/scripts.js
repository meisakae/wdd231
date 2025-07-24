import {temples} from '../data/temples.js'
//console.log(temples)

import {url} from '../data/temples.js'
//console.log(url)

const showHere = document.querySelector("#showHere")

const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myinfo = document.querySelector('#mydialog p')
const myclose = document.querySelector('mydialog button')
myclose.addEventListener("click", () => mydialog.close())

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        console.photo = document.createElement('img')
        photo.src= `${url}${x.path}`
        photo.alt=x.name

        showHere.appendChild(photo)
    })
}

displayItems(temples)
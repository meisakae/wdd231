//JOin.html//
const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelectorAll(".closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const openButton4 = document.querySelector("#openButton4");


if (openButton1 && dialogBox && dialogBoxText) {
    openButton1.addEventListener("click", ()=> {
        dialogBox.showModal();
        dialogBoxText.innerHTML = 'Monthly newsletter subscription, accese to members only Facebook grop and invitation to one annual networking event.'
});
}

if (openButton2 && dialogBox && dialogBoxText) {
    openButton2.addEventListener("click", ()=> {
        dialogBox.showModal();
        dialogBoxText.innerHTML = 'Accese to one monthly business work shop and two free entries to annual events.'
});
}

if (openButton3 && dialogBox && dialogBoxText) {
    openButton3.addEventListener("click", ()=> {
        dialogBox.showModal();
        dialogBoxText.innerHTML = 'Free entry to all monthly events and one week homepage spotlight feature.'
});
}

if (openButton4 && dialogBox && dialogBoxText) {
    openButton4.addEventListener("click", ()=> {
        dialogBox.showModal();
        dialogBoxText.innerHTML = 'Monthly featured promotion on Chamber homepage and One-on-One business consulting'
});
}

closeButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dialog = btn.closest("dialog");
        if(dialog) {
            dialog.close();
        };
    });
})

//Thankyou.html//
document.addEventListener("DOMContentLoaded", () =>
{
    const params = new URLSearchParams(window.location.search);

    const fistNameElement = document.getElementById("fname");
    if (fistNameElement) {
        fistNameElement.textContent = params.get("fname");
    }

    const lasrNameElement = document.getElementById("lname");
    if (lasrNameElement) {
        lasrNameElement.textContent = params.get("lname");
    }

    const emailElement = document.getElementById("email");
    if (emailElement) {
        emailElement.textContent = params.get("email");
    }

    const mobilPhoneElement = document.getElementById("tel");
    if (mobilPhoneElement) {
        mobilPhoneElement.textContent = params.get("tel");
    }

    const businessElement = document.getElementById("business");
    if (businessElement) {
        businessElement.textContent = params.get("business");
    }

    const timestampElement = document.getElementById("timestamp");
    if (timestampElement) {
        timestampElement.textContent = params.get("timestamp");
    }

    document.getElementById("fname").textContent = params.get("fname");
    document.getElementById("lname").textContent = params.get("lname");
    document.getElementById("email").textContent = params.get("email");
    document.getElementById("tel").textContent = params.get("tel");
    document.getElementById("business").textContent = params.get("business");
    document.getElementById("timestamp").textContent = params.get("timestamp");
});

function datatimestamp() {
    const now = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    document.getElementById("timestamp").innerText = now.toLocaleString(undefined, options);
}
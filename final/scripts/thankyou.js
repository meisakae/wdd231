const params = new URLSearchParams(window.location.search);
const ids = [
    "fname", "lname", "email", "tel", "dob", "participants", "tour-date",
    "history", "culture", "food", "requests", "timestamp"
];

ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = params.get(id) || "";
    }
});
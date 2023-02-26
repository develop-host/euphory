console.log('Sito online');

var titolo = ("cos'è euphory");

let pageTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "RITORNA IN EUPHORY"
})
window.addEventListener("focus", () => {
    document.title = "euphory"
})
let currentURL = window.location.href;
console.log(currentURL)

let spam = ('spam')

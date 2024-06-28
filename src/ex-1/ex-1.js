// Given - I am on the html page
// When the page is rendered
// Then I see the title Hello Javascript

const title = "Hello Javascript"
const container = document.getElementById("h1")

function renderTitle(title) {
    container.innerHTML = /* html */ `<h1>${title}</h1>`
}

renderTitle(title)
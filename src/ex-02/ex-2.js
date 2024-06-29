// Given I am on the html page
// When the page is rendered
// Then it shows the text "The sum of 3 + 5 is 8"


const numb1 = 3
const numb2 = 5

function sum(parameter1, parameter2) {
    let total = parameter1 + parameter2
    return total
}

function render(parameter1, parameter2, total) {
    const container = document.getElementById('container')
    const text = `The sum of ${parameter1} + ${parameter2} is ${total}`
    container.innerHTML = text
}

render(numb1, numb2, sum(numb1, numb2))

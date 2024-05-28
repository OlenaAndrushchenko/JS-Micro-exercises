// Given I am on the html page
// When the page is rendered
// Then it shows the text "The sum of 3 + 5 is 8"

const numb1 = 3
const numb2 = 5
const total = numb1 + numb2
const text = `The sum of ${numb1} + ${numb2} is ${total}` 
// console.log(text);

function render() {     
    const container = document.getElementById('container')
    container.innerHTML = text 
}

render()
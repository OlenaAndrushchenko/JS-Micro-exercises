// Given I am on the html page
// When the page is rendered
// Then it shows the text "The sum of 3 + 5 is 8"


const numb1 = 3
const numb2 = 5

// function render() {     
//     const container = document.getElementById('container')
//     const total = numb1 + numb2
//     const text = `The sum of ${numb1} + ${numb2} is ${total}` 
//     container.innerHTML = text 
// }

// render()

// using 2 functions
function sum(parameter1, parameter2) {
    let total = parameter1 + parameter2
    console.log('p1', parameter1);
    console.log('p2', parameter2);
    console.log('total', total);
    return total
}

function render(parameter1, parameter2, total) {
    const container = document.getElementById('container')
    const text = `The sum of ${parameter1} + ${parameter2} is ${total}`
    container.innerHTML = text
    console.log('render')
}

render(numb1, numb2, sum(numb1, numb2))

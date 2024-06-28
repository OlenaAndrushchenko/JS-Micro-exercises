// Given user on the page with form
// When user fills the form and click submit button
// Then below the form appears text “The largest number is <result>”

// add event listener to form -> take parsed to int values from inputs -> check which num is largest -> print text in html

function render() {
    
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const num1 = parseInt(document.getElementById('num-one').value);
        const num2 = parseInt(document.getElementById('num-two').value);
        const num3 = parseInt(document.getElementById('num-three').value);

        const result = Math.max(num1, num2, num3);

        const container = document.getElementById('container');
        const text = `The largest number is ${result}`
        container.innerHTML = text

    })
}

render()
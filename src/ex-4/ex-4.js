// Given user on the page with form
// When user fills the form and click submit button
// Then below the form appears text “The sum of <number-one> with <number-two> is <result>”

// add event listener to form -> take parsed to int values from inputs -> result that sum numbers -> print text in html

function render() {
    
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const num1 = parseInt(document.getElementById('num-one').value);
        const num2 = parseInt(document.getElementById('num-two').value);
        const result = num1 + num2;

        document.getElementById('container').textContent = `The sum of ${num1} + ${num2} is ${result}`

    })
}

render()
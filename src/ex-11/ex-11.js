// Given user on the page with form
// When user fills the form and click submit button
// Then below the form print if number is divisible by 2, 3, 5 or 7

// add event listener to form -> take parsed to int values from input -> check if the number is divisible by 2, 3, 5, or 7 -> print `The number (${number}) is divisible by one of the numbers (2, 3, 5 or 7)` to html

function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const number = parseInt(document.getElementById('number').value);

        const result = (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) 
        ? `The number (${number}) is divisible by one of the numbers (2, 3, 5 or 7)` 
        : `The number (${number}) is not divisible by any of the numbers (2, 3, 5 or 7)`;

        document.getElementById('container').innerHTML = result;
    });
}


render()
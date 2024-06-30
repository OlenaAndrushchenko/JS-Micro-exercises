// Given user on the page with form
// When user fills the form and click submit button
// Then below the form print if number is divisible by 2, 3, 5 or 7 and list all divisors

// add event listener to form -> take parsed to int values from input -> create array for divisors -> check if the number is divisible by 2, 3, 5, or 7 ? push divisor to array->  array is not empty ? print all options by which it is divisible : print the number is not divisible by any

function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const number = parseInt(document.getElementById('number').value);
        const divisors = [];

        if (number % 2 === 0) divisors.push(2);
        if (number % 3 === 0) divisors.push(3);
        if (number % 5 === 0) divisors.push(5);
        if (number % 7 === 0) divisors.push(7);

        const result = divisors.length > 0
        ? `The number (${number}) is divisible by: ${divisors.join(', ')}` 
        : `The number (${number}) is not divisible by any of the numbers (2, 3, 5 or 7)`;

        document.getElementById('container').innerHTML = result;
    });
}


render()
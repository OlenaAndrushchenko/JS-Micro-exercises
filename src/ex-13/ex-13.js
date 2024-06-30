// Given user on the page with form
// When user fills the form and click submit button
// Then below the form display divisors of a given number

// add event listener to form -> take parsed to int values from input -> create array for divisors -> find divisors (iterate through numbers from 1 up to the input number, check if each number divides the input number evenly) ? push divisor to array -> print all divisors of number


function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const number = parseInt(document.getElementById('number').value);
        const divisors = [];

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) divisors.push(i);
        }

        const result = `Divisors of (${number}): ${divisors.join(', ')}`

        document.getElementById('container').innerHTML = result;
    });
}


render()
// Given user on the page with form
// When user fills the form and click submit button
// Then below the form display common divisors of two given numbers

// add event listener to form -> take parsed to int values from input -> create array for divisors -> find divisors (iterate through numbers from 1 up to the smaller of the two input numbers, check if each number divides both input number evenly) ? push divisor to array -> array is not empty ? print all divisors of the two numbers : print no common divisors found


function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const number1 = parseInt(document.getElementById('number1').value);
        const number2 = parseInt(document.getElementById('number2').value);
        const commonDivisors = [];

        for (let i = 1; i <= Math.min(number1, number2); i++) {
            if (number1 % i === 0 && number2 % i === 0) commonDivisors.push(i);
        }

        const result = commonDivisors.length > 0
        ? `Common divisors of (${number1}, ${number2}): ${commonDivisors.join(', ')}`
        : `No common divisors found for (${number1}, ${number2})`;

        document.getElementById('container').innerHTML = result;
    });
}


render()
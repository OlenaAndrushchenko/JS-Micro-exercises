// Given user on the page with form
// When user fills the form and click submit button
// Then below the form display if the entered number is prime or not

// add event listener to form -> take parsed to int values from input -> check if number is prime -> display result
/** isPrime function:
 * - numbers less than or equal to 1 are not prime
 * - number 2 is the only even prime number
 * - other even numbers greater than 2 are not prime
 * - for odd numbers greater than 2, checks divisibility from 3 up to the square root of the number
 */

function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;   
    };
    return true;
}

function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const number = parseInt(document.getElementById('number').value);

        const result = isPrime(number)
        ? `${number} is a prime number`
        : `${number} is not a prime number`;

        document.getElementById('container').innerHTML = result;
    });
}


render()
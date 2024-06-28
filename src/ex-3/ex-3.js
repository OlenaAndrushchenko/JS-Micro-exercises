// Given user on the page with form
// When user fills the form and click submit button
// Then below the form appears text "Hello <username>"


// take username.value
// render html container with text "hello <username.value>"

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('clicked');

    const usernameInput = document.getElementById('username');

    document.getElementById('container').innerHTML = `Hello ${usernameInput.value}`
})
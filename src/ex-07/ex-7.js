// Given user on the page with form
// When user fills the form and click submit button
// Then below the form appears text “The letter 'a' appears <result> times.”

function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const phrase = document.getElementById('phrase').value;
        const result = (phrase.match(/a/gi) || []).length

        document.getElementById('container').textContent = `The letter 'a' appears ${result} times.`
    });
}


render()
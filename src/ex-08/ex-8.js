// Given user on the page with form
// When user fills the form and click submit button
// Then below the form appears text with all unique and all vowels 

function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const phrase = document.getElementById('phrase').value;

        const uniqueVowels = [...new Set((phrase.match(/[aeiou]/gi) || []))].join(', ');
        const uniqueVowelsText = uniqueVowels ? `Unique vowels in your sentence: ${uniqueVowels}.` : 'No vowels found';

        const allVowels = (phrase.match(/[aeiou]/gi) || []).join(', ');
        const allVowelsText = allVowels ? `All vowels: ${allVowels}.` : '';

        document.getElementById('container').innerHTML = `<p>${uniqueVowelsText}</p> <p>${allVowelsText}</p>`
    });

}


render()
// Given user on the page with form
// When user fills the form and click submit button
// Then below the form print how many times each of the vowels appears

/**
 * add event listener to form -> take converted to lowercase value from input
 * create vowels array ['a', 'e', 'i', 'o', 'u']
 * create empty object to count vowels
 * count vowels in the phrase: 
 *    - iterate through each character of the phrase
 *    - check if the character is a vowel using Array.includes() 
 *      - ? increment the count of that vowel in the vowelCounts object
 * prepare the text to display vowel counts: 
 *    - iterate through the vowels array
 *    - if a vowel count is greater than zero, append its count to the output text
 * display the result in the HTML container
 */

function render() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const phrase = document.getElementById('phrase').value.toLowerCase();
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const vowelCounts = {};

        vowels.forEach(vowel => {
            vowelCounts[vowel] = 0;
        });

        for (let char of phrase) {
            if (vowels.includes(char)) vowelCounts[char]++;
        }

        let text = '';
        vowels.forEach(vowel => {
            if (vowelCounts[vowel] > 0) 
                text += `Vowel <strong>'${vowel}'</strong> appears <strong>${vowelCounts[vowel]}</strong> times.<br>`;
        });

        document.getElementById('container').innerHTML = text;
    });
}


render()
// Given user on the page with form
// When user fills the form and click submit button
// Then below the form print how many times each of the vowels appears

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
            if (vowels.includes(char)) {
                vowelCounts[char]++;
            }
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
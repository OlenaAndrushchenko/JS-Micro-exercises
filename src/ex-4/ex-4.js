function render() {
    
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const num1 = parseInt(document.getElementById('num-one').value);
        const num2 = parseInt(document.getElementById('num-two').value);
        const result = num1 + num2;
        const container = document.getElementById('container');
        const text = `The sum of ${num1} + ${num2} is ${result}`
        container.innerHTML = text

    })
}

render()
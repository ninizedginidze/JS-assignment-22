const input = document.getElementById('userInput');
const button = document.getElementById('showBtn');
const result = document.getElementById('result');

 button.addEventListener('click', () => {
    result.textContent = input.value;
 });
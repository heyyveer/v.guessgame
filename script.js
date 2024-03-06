const entryBoxes = document.querySelectorAll('.entry');
const guessButton = document.querySelector('button');
const hintElement = document.querySelector('.hint');


const words = ["apple", "maple", "shorty", "grape", "pinea"];
const targetWord = words[Math.floor(Math.random() * words.length)];


entryBoxes.forEach((entry, index) => {
    entry.textContent = "_"; 
});

guessButton.addEventListener('click', () => {
    checkGuess();
});

function checkGuess(){
    let guessedWord = '';
    for (let entry of entryBoxes) {
        guessedWord += entry.textContent;
    }

    if(guessedWord==targetWord)
    {
        alert(" YOUR GUESSED WORD IS RIGHT ")
    }
    else{
        alert( "YOUR GUESSED WORD IS WRONG ")
    }
}

    function resetGame() {
    entryBoxes.forEach(entry => {
        entry.textContent = "_";
    });
    targetWord = words[Math.floor(Math.random() * words.length)];
}

function displayHint() {
    hintElement.textContent = "Hint: It's a type of fruit.";
}


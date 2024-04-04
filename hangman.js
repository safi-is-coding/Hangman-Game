// word list for the hangman game
let word_list = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "strawberry",
    "blueberry",
    "watermelon",
    "melon",
    "pear",
    "peach",
    "plum",
    "cherry",
    "pineapple",
    "mango",
    "lemon",
    "lime",
    "grapefruit",
    "coconut",
    "papaya",
];

let x = Math.floor(Math.random() * word_list.length - 1 + 1);

let lives = 0;
chose_word = word_list[ x ];
//console.log(chose_word)

let display = [];
for (i = 0; i < chose_word.length; i++) {
    display.push("_");
}

document.getElementById("word_length").innerHTML =`The word contains ` + String(display.length) + ` letters.`;
document.getElementById("display").innerText = display.join(" ");

let display2 = chose_word.split("");


function reset () {
    location.reload();
}


function check(alp) {
    document.getElementById("warning").innerText = `You've ${10 - lives} lives !`;

    if (display.includes('_')) {
        for (let i = 0; i < display.length; i++) {
            if (alp === display[i]) {
                document.getElementById("warning").innerText = `You've already guessed '${alp}'`;
                return; // No need to continue checking if the letter is already guessed
            }
        }

        let letterGuessed = false;
        for (let i = 0; i < chose_word.length; i++) {
            if (chose_word[i] === alp) {
                display[i] = alp;
                document.getElementById("display").innerText = display.join(" ");
                letterGuessed = true;
            }
        }

        if (!letterGuessed) {
            lives++;
            if (lives < 10) {
                document.getElementById("warning").innerText = `You guessed wrong, Try again you have ${10 - lives} left`;
                document.getElementById("hangman-image").src = `images/${lives}.jpg`;
            } else {
                document.getElementById("reset").style.display = "block";
                document.getElementById("warning").innerText = `The Word was : ${chose_word}`;
                document.getElementById("hangman-image").src = `images/over.gif`;
                disableButtons();
            }
        }
    } else {
        // No underscores left in the display array, meaning all letters have been guessed
        document.getElementById("hangman-image").src = `images/dance1.gif`;
        document.getElementById("warning").innerText = `Congratulations! You've guessed the word: ${chose_word}`;
        document.getElementById("reset").style.display = "block";
        disableButtons();
    }
}


function disableButtons() {
    let buttons = document.getElementsByClassName('alp-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}


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

let x = Math.floor(Math.random() * word_list.length);

let lives = 0;
let chosen_word = word_list[x];
console.log(chosen_word);

let display = [];
for (let i = 0; i < chosen_word.length; i++) {
    display.push("_");
}

document.getElementById("word_length").innerHTML = `The word contains ` + String(display.length) + ` letters.`;
document.getElementById("display").innerText = display.join(" ");

function reset() {
    location.reload();
}

function check(alp) {
    document.getElementById("warning").innerText = `You've ${10 - lives} lives !`;

    if (display.includes('_')) {
        if (display.includes(alp)) {
            document.getElementById("warning").innerText = `You've already guessed '${alp}'`;
            return;
        }

        let letterGuessed = false;
        for (let i = 0; i < chosen_word.length; i++) {
            if (chosen_word[i] === alp) {
                display[i] = alp;
                document.getElementById("display").innerText = display.join(" ");
                letterGuessed = true;
            }
        }

        if (!letterGuessed) {
            lives++;
            if (lives < 10) {
                document.getElementById("warning").innerText = `You guessed wrong, Try again you have ${10 - lives} lives left`;
                document.getElementById("hangman-image").src = `images/${lives}.jpg`;
            } else {
                document.getElementById("reset").style.display = "block";
                document.getElementById("warning").innerText = `The Word was: ${chosen_word}`;
                document.getElementById("hangman-image").src = `images/over.gif`;
                disableButtons();
            }
        }
    }

    if (!display.includes('_')) {
        document.getElementById("hangman-image").src = `images/dance1.gif`;
        document.getElementById("warning").innerText = `Congratulations! You've guessed the word: ${chosen_word}`;
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

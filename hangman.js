// word list for the hangman game
let word_list = [
    'apple', 'banana', 'cherry', 'date', 'mango', 'kiwi', 'grape', 'orange', 'pineapple', 'watermelon', 'strawberry'
    ]

let x = Math.floor((Math.random() * word_list.length-1) + 1);

let lives = 0
let chose_word = word_list[x]
let guess = document.getElementById('guess_letter')
// console.log(chose_word)

let display = []
for(i=0;i<chose_word.length;i++){
    display.push('_');
}
document.getElementById("word_length").innerHTML = `The word contains `+ String(display.length) +` letters.`; 
document.getElementById( 'display' ).innerText = display.join(' ')


let display2 = chose_word.split('')

let input = document.getElementById("guess_letter");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit-btn").click();
  }
});

function reset(){
    location.reload()
}

function check(){
    // console.log(guess.value.toLowerCase());
    // console.log(chose_word);

    if(guess.value.toLowerCase() == ''){
        document.getElementById( 'warning' ).innerText = "Please enter a letter."
    }
    else
    {
        document.getElementById( 'warning' ).innerText = `You've ${10-lives} lives !`

        for(i=0;i<display.length;i++){
            if(guess.value.toLowerCase() == display[i]){
                document.getElementById( 'warning' ).innerText = `You've already guessed '${guess.value.toLowerCase()}'`
                // console.log("Already present")
            }
        }

        for(i=0;i<chose_word.length;i++) 
        {
            letter = guess.value.toLowerCase()
            if(chose_word[i] == letter){
                display[i] = letter
                document.getElementById( 'display' ).innerText = display.join(' ')
            }
        }
    
        let present=false 
        for(i=0;i<display2.length;i++)
        {
            if(guess.value.toLowerCase() == display2[i])
            {
                present=true
            }
        }
        if(!present){
            // console.log("Not Presnet");
            lives += 1
            // console.log('lives ' + lives)
            if(lives==0){
                document.getElementById('hangman-image').src=`images/0.jpg`
            }
            else if (lives<=10)
            {
                document.getElementById( 'warning' ).innerText = `You guessed wrong, Try again you have ${10-lives} left`
                document.getElementById('hangman-image').src=`images/${lives}.jpg`
            }
            else
            {
                document.getElementById( 'warning' ).innerText = `The Word was : ${chose_word}`
                document.getElementById('hangman-image').src=`images/gameover.png`

                document.getElementById("guess_letter").disabled = true
                document.getElementById("submit-btn").disabled = true
                document.getElementById("reset").style.display = 'block'

            }
        }
        
        
        if (display.indexOf('_')== -1 )
        {
            document.getElementById( 'warning' ).innerText = `Congratulations! You've guessed the word: ${chose_word}`
            document.getElementById('hangman-image').src=`images/won.png`
        }
    }
    guess.value = ""
}

    


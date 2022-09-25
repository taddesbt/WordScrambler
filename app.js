
const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
let inplay = false;
let scramble = "";
let scrambled = "";
let score = 0;
const myArray = ["javascript", "website", "html", "document", "course", "new"];


button.addEventListener("click", function () {
    if (!inplay) {
        inplay = true;
        score = 0;
        button.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    }
    else {
        let tempGuess = guess.value;
        score++;
        if (tempGuess === scramble) {
            console.log("correct");
            inplay = false;
            message.innerHTML = "Correct it was " + scramble + " it took " + score + " guesses";
            button.innerHTML = "Start";
            guess.classList.toggle("hidden");
        }
        else {
            console.log("guess again");
            message.innerHTML = "Wrong " + scrambled;
        }
    }

    function createWord() {
        let randomIndex = Math.floor(Math.random() * myArray.length);
        let tempWord = myArray[randomIndex];
        return tempWord;
    }
    
    function randomArray(arr) {

         arr = arr.sort(function(){return 0.5-Math.random()})

      

        return arr;
    }



})

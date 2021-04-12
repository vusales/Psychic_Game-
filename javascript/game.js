//psychic 
//1. array qur +
//2. istifadeciden sorus +
//3. oynamaq isteyirse secdiyi herfe basmagini iste +
// 4. user herfi ile random muqaise et +
// 5. eynidirse win-de xal artir +
//6. deyilse guesse leftde say artir, wrong guessese herfi yaz+. 
//7. 10 sehv cvbdan sonra losesi artir

var alphabet = ["a", "b", "c", , "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var cnfr = confirm("Would You like to start?");

var select_random_leters = function () {
    let select_random = alphabet[Math.floor(Math.random() * alphabet.length)];
    return select_random;
}

if (cnfr) {
    alert("Please,press letter which you want in order to start!");
}
else {
    alert("See You Later!");
}
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let wrongGuesses = [];


function preskey(e){
    userChose = e.key;
    compchose = select_random_leters();
    console.log(compchose);
    winDiv = document.getElementById('win');
    GuessesLeft = document.getElementById('guessesLeft');
    if (userChose === compchose) {
        wins++;
        guessesLeft++;
        winDiv.innerHTML = ("Wins: " + wins);
    } else if (guessesLeft != 0){
        guessesLeft--;
        GuessesLeft.innerHTML = ("Guesses Left: " + guessesLeft)
        WrngChose();
    } else if (guessesLeft == 0) {
        losses++;
        Losses();
        lose = confirm("YOU LOSE,WOULD YOU LIKE TO CONTINUE?");
        Reset();
    }
}


function Reset() {
    if (lose===true && losses<4) {
        guessesLeft = 10;
        GuessesLeft.innerHTML = ("Guesses Left: " + guessesLeft);
        // userWrongChose.style.height="auto";
        // document.getElementsByClassName('container').style.height="auto";
    }
    else{
        alert("YOU LOSE!");
        guessesLeft = 10;
        wins = 0;
        losses = 0
        wrongGuesses = [];
        preskey();  
    }
}

function WrngChose() {
    wrongGuesses.push(userChose);
    userWrongChose = document.getElementById('user_wrong_guesses');
    userWrongChose.innerHTML = ("Wrong Guesses: " + wrongGuesses.join(","));

}

function Losses() {
    document.getElementById('meglubiyyetS').innerHTML = ("Losses:" + losses);
}



window.onkeypress = preskey;
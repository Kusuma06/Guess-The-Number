

let range = document.getElementById("range");
let initial = document.getElementById("initial");
let final = document.getElementById("final");
let stat = document.getElementById("status");
let guess = document.getElementById("guess");
let chances, random;
//to set range
function setTarget() {
    if (initial.value === '' || final.value === '') {
        alert("enter range ");
    }
    else {
        range.innerHTML = "Range is " + initial.value + " - " + final.value;
        random = Math.floor(Math.random() * final.value + initial.value);
        chances = 0;
    }
}

//display instructions
function instructions() {
    let rd = document.getElementById("instruction");
    let btn = document.getElementById("click-me");
    if (rd.style.display === "none") {
        rd.style.display = "inline"
        btn.innerText = "Close";
    }
    else {
        rd.style.display = "none";
        btn.innerText = "Click me";
    }
}

//check guess
function checkGuess() {
    chances++;
    if (guess.value == '') {
        alert("Enter your Guess");
    }
    else if (initial.value == '' || final.value == '') {
        alert(" First enter the range");
    }
    else if (chances > 10) {
        stat.innerText = "Sorry!🙃your chances are completed.The correct guess is" + random + ".Try again🤗";
    }
    else {
        if (guess.value == random) {
            stat.innerText = "Wow🥳🥳Congrats!🏆Your guess is correct at attempt " + chances;
            chances = 0;
        }
        else if (random < guess.value) {
            stat.innerText = "OPPS!😞guess smaller number"
        }
        else {
            stat.innerText = "OPPS!😞guess bigger number"
        }
    }
}
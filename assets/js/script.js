// Wait for DOM to finish loading before displaying the instructions modal
// Modal code taken from https://www.w3schools.com/howto/howto_css_modals.asp

document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    let modal = document.getElementById("instructions-modal");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // Display the modal
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        runGame(currentQuestion);
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            runGame(currentQuestion);
        }
    }
});

// Add variable for question counter
let currentQuestion = 0;

// 
function displayQuestion() {
    // let q = currentQuestion;
    let firstColour = document.getElementById("first-colour");
    let secondColour = document.getElementById("second-colour");
    
    let display = currentQuestion === 0 ? (firstColour.style.backgroundColor = 'red', secondColour.style.backgroundColor = 'blue')
        : currentQuestion === 1 ? (firstColour.style.backgroundColor = 'blue', secondColour.style.backgroundColor = 'white')
        : currentQuestion === 2 ? (firstColour.style.backgroundColor = 'blue', secondColour.style.backgroundColor = 'yellow')
        : currentQuestion === 3 ? (firstColour.style.backgroundColor = 'red', secondColour.style.backgroundColor = 'white')
        : currentQuestion === 4 ? (firstColour.style.backgroundColor = 'yellow', secondColour.style.backgroundColor = 'black')
        : currentQuestion === 5 ? (firstColour.style.backgroundColor = 'red', secondColour.style.backgroundColor = 'yellow')
        : currentQuestion === 6 ? (firstColour.style.backgroundColor = 'red', secondColour.style.backgroundColor = 'black')
        : currentQuestion === 7 ? (firstColour.style.backgroundColor = 'blue', secondColour.style.backgroundColor = 'black')
        : currentQuestion === 8 ? (firstColour.style.backgroundColor = 'yellow', secondColour.style.backgroundColor = 'white')
        : error();
}

function runGame() {
    displayQuestion(currentQuestion);
}

// Set answer span element background colour
function userAnswerHandler(x) {
    // Store clicked element style properties in variable
    let optionStyle = getComputedStyle(x);
    // Store background colour property in variable
    let color = optionStyle.backgroundColor;
    // Use color variable to set answer span background colour
    document.getElementById("answer").style.backgroundColor = color;
}
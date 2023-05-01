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

    if (currentQuestion === 0) {
        firstColour.style.backgroundColor = 'red';
        secondColour.style.backgroundColor = 'blue';
    } else {
        alert(`An error has occured`);
        throw `An error has occured. Aborting!`;
    }
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
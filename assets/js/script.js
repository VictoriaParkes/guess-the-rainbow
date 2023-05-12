// Wait for DOM to finish loading before displaying the instructions modal
// Modal code taken from https://www.w3schools.com/howto/howto_css_modals.asp

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submit").addEventListener("click", function () {
        checkAnswer();
    });

    document.getElementById("answer").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener("click", () => {
            userAnswerHandler(gridItem);
        })
    });

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
let correctAnswer;
let questionMark = document.getElementById("question-mark");

// Store questions and answer in an object using key-value pairs
const questions = [
    { firstColour: "red", secondColour: "blue", correctAnswer: "rgb(128, 0, 128)" },
    { firstColour: "blue", secondColour: "white", correctAnswer: "rgb(173, 216, 230)" },
    { firstColour: "blue", secondColour: "yellow", correctAnswer: "rgb(0, 128, 0)" },
    { firstColour: "red", secondColour: "white", correctAnswer: "rgb(255, 192, 203)" },
    { firstColour: "yellow", secondColour: "black", correctAnswer: "rgb(128, 128, 0)" },
    { firstColour: "red", secondColour: "yellow", correctAnswer: "rgb(255, 165, 0)" },
    { firstColour: "red", secondColour: "black", correctAnswer: "rgb(139, 0, 0)" },
    { firstColour: "blue", secondColour: "black", correctAnswer: "rgb(0, 0, 139)" },
    { firstColour: "yellow", secondColour: "white", correctAnswer: "rgb(255, 255, 166)" },
]

// 
function displayQuestion() {
    let firstColourBox = document.getElementById("first-colour");
    let secondColourBox = document.getElementById("second-colour");

    let question = questions[currentQuestion];
    firstColourBox.style.backgroundColor = question.firstColour;
    secondColourBox.style.backgroundColor = question.secondColour;
    correctAnswer = question.correctAnswer;

    document.getElementById("answer").style.backgroundColor = "rgba(0, 0, 0, 0)";
    questionMark.style.visibility = "visible";
}

function runGame() {
    displayQuestion(currentQuestion);
}

// Set answer span element background colour
function userAnswerHandler(gridItem) {
    // Store clicked element style properties in variable
    let optionStyle = getComputedStyle(gridItem);
    // Store background colour property in variable
    let color = optionStyle.backgroundColor;
    // Use color variable to set answer span background colour
    document.getElementById("answer").style.backgroundColor = color;
    // Hide question mark
    questionMark.style.visibility = "hidden";
}

function checkAnswer() {
    let answerBox = document.getElementById("answer");
    let answerStyle = window.getComputedStyle(answerBox, null);

    let userAnswer = answerStyle.getPropertyValue("background-color");

    console.log(userAnswer);

    let answerCheck = userAnswer === correctAnswer;

    if (answerCheck) {
        alert(`correct`);
        incrementQuestion();
        runGame(currentQuestion);
    } else if (userAnswer === "rgba(0, 0, 0, 0)") {
        alert(`Select a colour`);
    } else {
        alert(`incorrect`);
    }
}

function incrementQuestion() {
    currentQuestion++;
}
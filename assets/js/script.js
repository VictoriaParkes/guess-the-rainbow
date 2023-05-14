// Wait for DOM to finish loading before adding event listeners and displaying the instructions modal
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

    document.getElementById("instructions-btn").addEventListener("click", function () {
        instructions();
    });

    // Set score
    document.getElementById("current-score").innerHTML = score;

    // Set questions answered
    document.getElementById("questions-answered").innerHTML = questionsAnswered;

    runGame(currentQuestion);
});

// Add variable for question counter
let currentQuestion = 0;
// Add variable for correct answer with no defined value
let correctAnswer;
// Get question mark html element
let questionMark = document.getElementById("question-mark");
// Add variable for score counter
let score = 0;
// Add variable for questions answered counter
let questionsAnswered = 0;

// Set questions and answers in an array using key value pairs
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

/**
 * Displays the current question, sets the correct answer
 * and resets the style of the answer box to no colour with
 * a question mark.
*/
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

/**
 * Checks if the user answer matches the correct answer and
 * displays the appropriate message modal to inform the user.
 * Increments the score, questions answered and current question
 * if user answer is correct.
 * Increments the questions answered and current question
 * if user answer is incorrect.
*/
function checkAnswer() {
    let answerBox = document.getElementById("answer");
    let answerStyle = window.getComputedStyle(answerBox, null);

    let userAnswer = answerStyle.getPropertyValue("background-color");

    console.log(userAnswer);

    let answerCheck = userAnswer === correctAnswer;

    if (answerCheck) {
        correct();
    } else if (userAnswer === "rgba(0, 0, 0, 0)") {
        notAnswered();
    } else {
        incorrect();
    }
}

// Increment the current question value by 1
function incrementQuestion() {
    currentQuestion++;
}

// Increment the score value by 1
function increaseScore() {
    score++;
    document.getElementById("current-score").innerHTML = score;
}

// Increment the questions answered by 1
function increaseQuestionsAnswered() {
    questionsAnswered++;
    document.getElementById("questions-answered").innerHTML = questionsAnswered;
}

function instructions() {
     // Get the modal
     let modal = document.getElementById("instructions-modal");
     // Get the <span> element that closes the modal
     let span = document.getElementsByClassName("close")[0];
     // Display the modal
     modal.style.display = "block";
     // When the user clicks on <span> (x), close the modal
     span.onclick = function () {
         modal.style.display = "none";
     }
 
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function (event) {
         if (event.target === modal) {
             modal.style.display = "none";
         }
     }
}

function correct() {
    // Get the modal
    let correctModal = document.getElementById("correct-modal");
    // Get the <span> element that closes the modal
    let close = document.getElementsByClassName("close")[1];
    correctModal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
        correctModal.style.display = "none";
        increaseScore();
        increaseQuestionsAnswered();
        incrementQuestion();
        runGame(currentQuestion);
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === correctModal) {
            correctModal.style.display = "none";
            increaseScore();
            increaseQuestionsAnswered();
            incrementQuestion();
            runGame(currentQuestion);
        }
    }
}

function notAnswered() {
    // Get the modal
    let selectModal = document.getElementById("select-modal");
    // Get the <span> element that closes the modal
    let close = document.getElementsByClassName("close")[2];
    // Display the modal
    selectModal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
        selectModal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === selectModal) {
            selectModal.style.display = "none";
        }
    }
}

function incorrect() {
    // Get the modal
    let incorrectModal = document.getElementById("incorrect-modal");
    // Get the <span> element that closes the modal
    let close = document.getElementsByClassName("close")[3];
    // Display the modal
    incorrectModal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
        incorrectModal.style.display = "none";
        incrementQuestion();
        increaseQuestionsAnswered();
        runGame(currentQuestion);
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === incorrectModal) {
            incorrectModal.style.display = "none";
            incrementQuestion();
            increaseQuestionsAnswered();
            runGame(currentQuestion);
        }
    }
}
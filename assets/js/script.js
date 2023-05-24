// Wait for DOM to finish loading before adding event listeners and displaying the welcome modal
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submit").addEventListener("click", function () {
        checkAnswer();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            enterKey();
        }
    });

    questionBoxes.forEach((box) => {
        box.addEventListener("mouseover", mouseOver);
    });

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener("click", () => {
            userAnswerHandler(gridItem);
        })
    });

    document.getElementById("instructions-btn").addEventListener("click", function () {
        instructions();
    });

    document.getElementById("reset-btn").addEventListener("click", function () {
        reset();
    });

    welcome();
});

// Add variable for question counter
let currentQuestion = 0;
// Add variable for questions answered counter
let questionsAnswered = 0;
// Add variable for score counter
let score = 0;

// Add variables with no defined value to set dynamically during the game
let firstText;
let secondText;
let correctAnswer;
let correctText;

// Question elements
const firstColourBox = document.getElementById("first-colour");
const secondColourBox = document.getElementById("second-colour");
const answerBox = document.getElementById("answer");
const questionMark = document.getElementById("question-mark");
const firstTextSpan = document.getElementById("first-colour-text");
const secondTextSpan = document.getElementById("second-colour-text");
const answerTextSpan = document.getElementById("answer-colour-text");
const questionBoxes = document.querySelectorAll(".box");

// Score elements
const scoreSpan = document.getElementById("score-span");
const questionsAnsweredSpan = document.getElementById("questions-answered-span")

// Answer options grid elements
const gridItems = document.querySelectorAll(".grid-item");

// Modal elements
const welcomeModal = document.getElementById("welcome-modal");
const instructionsModal = document.getElementById("instructions-modal");
const correctModal = document.getElementById("correct-modal");
const selectModal = document.getElementById("select-modal");
const incorrectModal = document.getElementById("incorrect-modal");
const endModal = document.getElementById("end-modal");
const close = document.getElementsByClassName("close");
const correctAnswerColour = document.getElementById("correct-answer-colour");
const correctAnswerText = document.getElementById("correct-answer-text");
const endScoreSpan = document.getElementById("end-score-span");

// Set questions and answers
const questions = [
    { firstColour: "rgb(255, 0, 0)", secondColour: "rgb(0, 0, 255)", correctAnswer: "rgb(128, 0, 128)" },
    { firstColour: "rgb(0, 0, 255)", secondColour: "rgb(255, 255, 255)", correctAnswer: "rgb(173, 216, 230)" },
    { firstColour: "rgb(0, 0, 255)", secondColour: "rgb(255, 255, 0)", correctAnswer: "rgb(0, 128, 0)" },
    { firstColour: "rgb(255, 0, 0)", secondColour: "rgb(255, 255, 255)", correctAnswer: "rgb(255, 192, 203)" },
    { firstColour: "rgb(255, 255, 0)", secondColour: "rgb(0, 0, 0)", correctAnswer: "rgb(128, 128, 0)" },
    { firstColour: "rgb(255, 0, 0)", secondColour: "rgb(255, 255, 0)", correctAnswer: "rgb(255, 165, 0)" },
    { firstColour: "rgb(255, 0, 0)", secondColour: "rgb(0, 0, 0)", correctAnswer: "rgb(139, 0, 0)" },
    { firstColour: "rgb(0, 0, 255)", secondColour: "rgb(0, 0, 0)", correctAnswer: "rgb(0, 0, 139)" },
    { firstColour: "rgb(255, 255, 0)", secondColour: "rgb(255, 255, 255)", correctAnswer: "rgb(255, 255, 166)" },
]

// Set text answers
const hoverTexts = [
    { firstText: "red", secondText: "blue", correctText: "purple" },
    { firstText: "blue", secondText: "white", correctText: "light blue" },
    { firstText: "blue", secondText: "yellow", correctText: "green" },
    { firstText: "red", secondText: "white", correctText: "pink" },
    { firstText: "yellow", secondText: "black", correctText: "dark yellow" },
    { firstText: "red", secondText: "yellow", correctText: "orange" },
    { firstText: "red", secondText: "black", correctText: "dark red" },
    { firstText: "blue", secondText: "black", correctText: "dark blue" },
    { firstText: "yellow", secondText: "white", correctText: "light yellow" },
]

/**
 * Displays the current question, sets the correct answer
 * and resets the style of the answer box to no colour with
 * a question mark.
*/
function displayQuestion() {
    let question = questions[currentQuestion];
    let hoverText = hoverTexts[currentQuestion];

    firstColourBox.style.backgroundColor = question.firstColour;
    firstText = hoverText.firstText;

    secondColourBox.style.backgroundColor = question.secondColour;
    secondText = hoverText.secondText;

    correctAnswer = question.correctAnswer;
    correctText = hoverText.correctText;

    answerBox.style.backgroundColor = "rgba(0, 0, 0, 0)";
    questionMark.style.visibility = "visible";
}

function runGame() {
    if (questionsAnswered >= "9") {
        // End game when 9 questions answered
        endGame();
    } else {
        displayQuestion(currentQuestion);
        // Set score
        scoreSpan.innerHTML = score;
        // Set questions answered
        questionsAnsweredSpan.innerHTML = questionsAnswered;
    }
}

// Set answer box span background colour
function userAnswerHandler(gridItem) {
    let optionStyle = getComputedStyle(gridItem);
    let color = optionStyle.backgroundColor;
    answerBox.style.backgroundColor = color;
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
    let answerStyle = window.getComputedStyle(answerBox, null);
    let userAnswer = answerStyle.getPropertyValue("background-color");
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
    scoreSpan.innerHTML = score;
}

// Increment the questions answered by 1
function increaseQuestionsAnswered() {
    questionsAnswered++;
    questionsAnsweredSpan.innerHTML = questionsAnswered;
}

// Display and close the welcome modal
function welcome() {
    welcomeModal.style.display = "flex";

    close[0].onclick = function () {
        closeWelcome();
    }

    window.onclick = function (event) {
        if (event.target === welcomeModal) {
            closeWelcome();
        }
    }
}

function closeWelcome() {
    welcomeModal.style.display = "none";
    runGame(currentQuestion);
}

// Display and close the instructions modal
function instructions() {
    instructionsModal.style.display = "flex";

    close[1].onclick = function () {
        closeModal();
    }

    window.onclick = function (event) {
        if (event.target === instructionsModal) {
            closeModal();
        }
    }
}

function closeModal() {
    instructionsModal.style.display = "none";
    selectModal.style.display = "none";
}

// Display and close the correct answer modal
function correct() {
    correctModal.style.display = "flex";

    close[2].onclick = function () {
        closeCorrect();
    }
    window.onclick = function (event) {
        if (event.target === correctModal) {
            closeCorrect();
        }
    }
}

function closeCorrect() {
    correctModal.style.display = "none";
    increaseScore();
    increaseQuestionsAnswered();
    incrementQuestion();
    runGame(currentQuestion);
}

// Display and close the select answer modal
function notAnswered() {
    selectModal.style.display = "flex";

    close[3].onclick = function () {
        closeModal();
    }
    window.onclick = function (event) {
        if (event.target === selectModal) {
            closeModal();
        }
    }
}

// Display and close the incorrect answer modal
function incorrect() {
    displayCorrectAnswer();
    incorrectModal.style.display = "flex";

    close[4].onclick = function () {
        closeIncorrect();
    }
    window.onclick = function (event) {
        if (event.target === incorrectModal) {
            closeIncorrect();
        }
    }
}

function closeIncorrect() {
    incorrectModal.style.display = "none";
    incrementQuestion();
    increaseQuestionsAnswered();
    runGame(currentQuestion);
}

// Inform the user of the correct answer in the incorrect answer modal
function displayCorrectAnswer() {
    correctAnswerColour.style.backgroundColor = correctAnswer;
    correctAnswerText.innerHTML = correctText;
}

// Display and close the end game modal
function endGame() {
    endScoreSpan.innerHTML = score;

    endModal.style.display = "flex";

    close[5].onclick = function () {
        closeEnd();
    }
    window.onclick = function (event) {
        if (event.target === endModal) {
            closeEnd();
        }
    }
}

function closeEnd() {
    endModal.style.display = "none";
    reset();
}

// Reset the game
function reset() {
    currentQuestion = 0;
    score = 0;
    questionsAnswered = 0;
    runGame();
}

// Display colour text when question spans hovered over
function mouseOver() {
    let hoverText = hoverTexts[currentQuestion];
    let answer = questions;
    firstTextSpan.innerHTML = hoverText.firstText;
    secondTextSpan.innerHTML = hoverText.secondText;
    firstTextSpan.style.visibility = "visible";
    secondTextSpan.style.visibility = "visible";

    let boxStyle = window.getComputedStyle(answerBox, null);
    let boxColour = boxStyle.getPropertyValue("background-color");

    if (boxColour === answer[0].correctAnswer) {
        answerTextSpan.innerHTML = "purple";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[1].correctAnswer) {
        answerTextSpan.innerHTML = "light Blue";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[2].correctAnswer) {
        answerTextSpan.innerHTML = "green";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[3].correctAnswer) {
        answerTextSpan.innerHTML = "pink";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[4].correctAnswer) {
        answerTextSpan.innerHTML = "dark yellow";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[5].correctAnswer) {
        answerTextSpan.innerHTML = "orange";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[6].correctAnswer) {
        answerTextSpan.innerHTML = "dark red";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[7].correctAnswer) {
        answerTextSpan.innerHTML = "dark blue";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === answer[8].correctAnswer) {
        answerTextSpan.innerHTML = "light yellow";
        answerTextSpan.style.visibility = "visible";
    } else if (boxColour === "rgba(0, 0, 0, 0)") {
        answerTextSpan.style.visibility = "hidden";
    }
}

// Close modal or check answer when enter key pressed
function enterKey() {
    let welcomeStyle = window.getComputedStyle(welcomeModal, null);
    let welcomeDisplay = welcomeStyle.getPropertyValue("display");

    let instructionsStyle = window.getComputedStyle(instructionsModal, null);
    let instructionsDisplay = instructionsStyle.getPropertyValue("display");

    let correctStyle = window.getComputedStyle(correctModal, null);
    let correctDisplay = correctStyle.getPropertyValue("display");

    let selectStyle = window.getComputedStyle(selectModal, null);
    let selectDisplay = selectStyle.getPropertyValue("display");

    let incorrectStyle = window.getComputedStyle(incorrectModal, null);
    let incorrectDisplay = incorrectStyle.getPropertyValue("display");

    let endStyle = window.getComputedStyle(endModal, null);
    let endDisplay = endStyle.getPropertyValue("display");

    if (welcomeDisplay === "flex") {
        closeWelcome();
        console.log("CLOSE welcome");
    } else if (instructionsDisplay === "flex") {
        console.log("CLOSE instructions");
        closeModal();
    } else if (correctDisplay === "flex") {
        console.log("CLOSE correct");
        closeCorrect();
    } else if (selectDisplay === "flex") {
        console.log("CLOSE select");
        closeModal();
    } else if (incorrectDisplay === "flex") {
        console.log("CLOSE incorrect");
        closeIncorrect();
    } else if (endDisplay === "flex") {
        console.log("CLOSE end");
        closeEnd();
    } else {
        checkAnswer();
    }
}

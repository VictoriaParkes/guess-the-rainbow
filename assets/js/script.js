// Questions and answers data
const questions = [
    {
        firstColour: "rgb(255, 0, 0)",
        secondColour: "rgb(0, 0, 255)",
        correctAnswer: "rgb(128, 0, 128)"
    },
    {
        firstColour: "rgb(0, 0, 255)",
        secondColour: "rgb(255, 255, 255)",
        correctAnswer: "rgb(173, 216, 230)"
    },
    {
        firstColour: "rgb(0, 0, 255)",
        secondColour: "rgb(255, 255, 0)",
        correctAnswer: "rgb(0, 128, 0)"
    },
    {
        firstColour: "rgb(255, 0, 0)",
        secondColour: "rgb(255, 255, 255)",
        correctAnswer: "rgb(255, 192, 203)"
    },
    {
        firstColour: "rgb(255, 255, 0)",
        secondColour: "rgb(0, 0, 0)",
        correctAnswer: "rgb(128, 128, 0)"
    },
    {
        firstColour: "rgb(255, 0, 0)",
        secondColour: "rgb(255, 255, 0)",
        correctAnswer: "rgb(255, 165, 0)"
    },
    {
        firstColour: "rgb(255, 0, 0)",
        secondColour: "rgb(0, 0, 0)",
        correctAnswer: "rgb(139, 0, 0)"
    },
    {
        firstColour: "rgb(0, 0, 255)",
        secondColour: "rgb(0, 0, 0)",
        correctAnswer: "rgb(0, 0, 139)"
    },
    {
        firstColour: "rgb(255, 255, 0)",
        secondColour: "rgb(255, 255, 255)",
        correctAnswer: "rgb(255, 255, 166)"
    },
];

// innerHTML text data
const hoverTexts = [
    {
        firstText: "red",
        secondText: "blue",
        correctText: "purple"
    },
    {
        firstText: "blue",
        secondText: "white",
        correctText: "light blue"
    },
    {
        firstText: "blue",
        secondText: "yellow",
        correctText: "green"
    },
    {
        firstText: "red",
        secondText: "white",
        correctText: "pink"
    },
    {
        firstText: "yellow",
        secondText: "black",
        correctText: "dark yellow"
    },
    {
        firstText: "red",
        secondText: "yellow",
        correctText: "orange"
    },
    {
        firstText: "red",
        secondText: "black",
        correctText: "dark red"
    },
    {
        firstText: "blue",
        secondText: "black",
        correctText: "dark blue"
    },
    {
        firstText: "yellow",
        secondText: "white",
        correctText: "light yellow"
    },
];

// Question elements
const firstColourBox = document.getElementById("first-colour");
const secondColourBox = document.getElementById("second-colour");
const questionBoxes = document.querySelectorAll(".question-box");
const answerBox = document.getElementById("answer");
const questionMark = document.getElementById("question-mark");
const firstTextSpan = document.getElementById("first-colour-text");
const secondTextSpan = document.getElementById("second-colour-text");
const answerTextSpan = document.getElementById("answer-colour-text");
const srFirstText = document.getElementById("sr-first-text");
const srSecondText = document.getElementById("sr-second-text");
const srAnswerText = document.getElementById("sr-answer-text");

// Score elements
const scoreSpan = document.getElementById("score-span");
const questionsAnsweredSpan = document.getElementById("questions-answered-span");

// Answer options grid elements
const gridItems = document.querySelectorAll(".grid-item");

// Buttons
const submitButton = document.getElementById("submit");
const instructionsButton = document.getElementById("instructions-btn");
const resetButton = document.getElementById("reset-btn");

// Modal elements
const welcomeModal = document.getElementById("welcome-modal");
const instructionsModal = document.getElementById("instructions-modal");
const correctModal = document.getElementById("correct-modal");
const selectModal = document.getElementById("select-modal");
const incorrectModal = document.getElementById("incorrect-modal");
const endModal = document.getElementById("end-modal");
const closeX = document.getElementsByClassName("close-x");
const correctAnswerColour = document.getElementById("correct-answer-colour");
const correctAnswerText = document.getElementById("correct-answer-text");
const endScoreSpan = document.getElementById("end-score-span");

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

/* 
Wait for DOM to finish loading before adding event listeners 
and displaying the welcome modal
*/
document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
    welcome();
});

function eventListeners() {
    submitButton.addEventListener("click", checkAnswer);

    instructionsButton.addEventListener("click", instructions);

    resetButton.addEventListener("click", reset);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            enterKey();
        }
    });

    questionBoxes.forEach((box) => {
        box.addEventListener("mouseover", questionMouseOver);
    });

    answerBox.addEventListener("mouseover", answerMouseOver);

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener("click", () => {
            userAnswerHandler(gridItem);
        });
    });
}

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

    srFirstText.innerHTML = hoverText.firstText;
    srSecondText.innerHTML = hoverText.secondText;

    answerBox.style.backgroundColor = "rgba(0, 0, 0, 0)";
    questionMark.style.visibility = "visible";
    srAnswerText.innerHTML = "what colour?"
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
    answerScreenReader();
}

function answerScreenReader() {
    let answer = questions;

    let boxStyle = window.getComputedStyle(answerBox, null);
    let boxColour = boxStyle.getPropertyValue("background-color");

    if (boxColour === answer[0].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[0].correctText;
    } else if (boxColour === answer[1].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[1].correctText;
    } else if (boxColour === answer[2].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[2].correctText;
    } else if (boxColour === answer[3].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[3].correctText;
    } else if (boxColour === answer[4].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[4].correctText;
    } else if (boxColour === answer[5].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[5].correctText;
    } else if (boxColour === answer[6].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[6].correctText;
    } else if (boxColour === answer[7].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[7].correctText;
    } else if (boxColour === answer[8].correctAnswer) {
        srAnswerText.innerHTML = hoverTexts[8].correctText;
    }
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
        select();
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

    closeX[0].onclick = function () {
        closeWelcome();
    };

    window.onclick = function (event) {
        if (event.target === welcomeModal) {
            closeWelcome();
        }
    };
}

function closeWelcome() {
    welcomeModal.style.display = "none";
    runGame(currentQuestion);
}

// Display and close the instructions modal
function instructions() {
    instructionsModal.style.display = "flex";
    instructionsButton.blur();

    closeX[1].onclick = function () {
        closeInstructions();
    };

    window.onclick = function (event) {
        if (event.target === instructionsModal) {
            closeInstructions();
        }
    };
}

function closeInstructions() {
    instructionsModal.style.display = "none";
}

// Display and close the correct answer modal
function correct() {
    correctModal.style.display = "flex";
    submitButton.blur();

    closeX[2].onclick = function () {
        closeCorrect();
    };
    window.onclick = function (event) {
        if (event.target === correctModal) {
            closeCorrect();
        }
    };
}

function closeCorrect() {
    correctModal.style.display = "none";
    increaseScore();
    increaseQuestionsAnswered();
    incrementQuestion();
    runGame(currentQuestion);
}

// Display and close the select answer modal
function select() {
    selectModal.style.display = "flex";
    submitButton.blur();

    closeX[3].onclick = function () {
        closeSelect();
    };
    window.onclick = function (event) {
        if (event.target === selectModal) {
            closeSelect();
        }
    };
}

function closeSelect() {
    selectModal.style.display = "none";
}

// Display and close the incorrect answer modal
function incorrect() {
    displayCorrectAnswer();
    incorrectModal.style.display = "flex";
    submitButton.blur();

    closeX[4].onclick = function () {
        closeIncorrect();
    };
    window.onclick = function (event) {
        if (event.target === incorrectModal) {
            closeIncorrect();
        }
    };
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

    closeX[5].onclick = function () {
        closeEnd();
    };
    window.onclick = function (event) {
        if (event.target === endModal) {
            closeEnd();
        }
    };
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
function questionMouseOver() {
    let hoverText = hoverTexts[currentQuestion];
    firstTextSpan.innerHTML = hoverText.firstText;
    secondTextSpan.innerHTML = hoverText.secondText;
    firstTextSpan.style.visibility = "visible";
    secondTextSpan.style.visibility = "visible";
}

function answerMouseOver() {
    let answer = questions;
    answerTextSpan.style.visibility = "visible";

    let boxStyle = window.getComputedStyle(answerBox, null);
    let boxColour = boxStyle.getPropertyValue("background-color");

    if (boxColour === answer[0].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[0].correctText;
    } else if (boxColour === answer[1].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[1].correctText;
    } else if (boxColour === answer[2].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[2].correctText;
    } else if (boxColour === answer[3].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[3].correctText;
    } else if (boxColour === answer[4].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[4].correctText;
    } else if (boxColour === answer[5].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[5].correctText;
    } else if (boxColour === answer[6].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[6].correctText;
    } else if (boxColour === answer[7].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[7].correctText;
    } else if (boxColour === answer[8].correctAnswer) {
        answerTextSpan.innerHTML = hoverTexts[8].correctText;
    } else if (boxColour === "rgba(0, 0, 0, 0)") {
        answerTextSpan.style.visibility = "hidden";
    }
}

// Close modal or check answer when enter key pressed
function enterKey() {

    let welcomeStyle = window.getComputedStyle(welcomeModal);
    let welcomeDisplay = welcomeStyle.getPropertyValue("display");

    let instructionsStyle = window.getComputedStyle(instructionsModal);
    let instructionsDisplay = instructionsStyle.getPropertyValue("display");

    let correctStyle = window.getComputedStyle(correctModal);
    let correctDisplay = correctStyle.getPropertyValue("display");

    let selectStyle = window.getComputedStyle(selectModal);
    let selectDisplay = selectStyle.getPropertyValue("display");

    let incorrectStyle = window.getComputedStyle(incorrectModal);
    let incorrectDisplay = incorrectStyle.getPropertyValue("display");

    let endStyle = window.getComputedStyle(endModal);
    let endDisplay = endStyle.getPropertyValue("display");

    if (welcomeDisplay === "flex") {
        closeWelcome();
    } else if (instructionsDisplay === "flex") {
        instructionsModal.style.display = "none";
    } else if (correctDisplay === "flex") {
        closeCorrect();
    } else if (selectDisplay === "flex") {
        closeSelect();
    } else if (incorrectDisplay === "flex") {
        closeIncorrect();
    } else if (endDisplay === "flex") {
        closeEnd();
    } else {
        checkAnswer();
    }
}
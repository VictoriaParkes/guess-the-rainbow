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

    const gridItems = document.querySelectorAll(".grid-item");
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

    const questionBoxes = document.querySelectorAll(".box");
    questionBoxes.forEach((box) => {
        box.addEventListener("mouseover", mouseOver);
    });

    welcome();
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

let welcomeModal = document.getElementById("welcome-modal");
let instructionsModal = document.getElementById("instructions-modal");
let correctModal = document.getElementById("correct-modal");
let selectModal = document.getElementById("select-modal");
let incorrectModal = document.getElementById("incorrect-modal");
let endModal = document.getElementById("end-modal");

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
    if (questionsAnswered >= "9") {
        endGame();
    } else {
        displayQuestion(currentQuestion);
        // Set score
        document.getElementById("current-score").innerHTML = score;
        // Set questions answered
        document.getElementById("questions-answered").innerHTML = questionsAnswered;
    }
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

// Display and close the welcome modal
function welcome() {
    let close = document.getElementsByClassName("close")[0];
    welcomeModal.style.display = "flex";

    // Close the modal when the user clicks x
    close.onclick = function () {
        welcomeModal.style.display = "none";
        runGame(currentQuestion);
    }

    // Close the modal when the user clicks outside the modal
    window.onclick = function (event) {
        if (event.target === welcomeModal) {
            welcomeModal.style.display = "none";
            runGame(currentQuestion);
        }
    }
}

// Display and close the instructions modal
function instructions() {
    let close = document.getElementsByClassName("close")[1];
    instructionsModal.style.display = "flex";

    // Close the modal when the user clicks x
    close.onclick = function () {
        instructionsModal.style.display = "none";
    }

    // Close the modal when the user clicks outside the modal
    window.onclick = function (event) {
        if (event.target === instructionsModal) {
            instructionsModal.style.display = "none";
        }
    }
}

// Display and close the correct answer modal
function correct() {
    let close = document.getElementsByClassName("close")[2];
    correctModal.style.display = "flex";

    // Close the modal when the user clicks x
    close.onclick = function () {
        correctModal.style.display = "none";
        increaseScore();
        increaseQuestionsAnswered();
        incrementQuestion();
        runGame(currentQuestion);
    }
    // Close the modal when the user clicks outside the modal
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

// Display and close the select answer modal
function notAnswered() {
    let close = document.getElementsByClassName("close")[3];
    selectModal.style.display = "flex";

    // Close the modal when the user clicks x
    close.onclick = function () {
        selectModal.style.display = "none";
    }
    // Close the modal when the user clicks outside the modal
    window.onclick = function (event) {
        if (event.target === selectModal) {
            selectModal.style.display = "none";
        }
    }
}

// Display and close the incorrect answer modal
function incorrect() {
    let close = document.getElementsByClassName("close")[4];
    displayCorrectAnswer();
    incorrectModal.style.display = "flex";

    // Close the modal when the user clicks x
    close.onclick = function () {
        incorrectModal.style.display = "none";
        incrementQuestion();
        increaseQuestionsAnswered();
        runGame(currentQuestion);
    }
    // Close the modal when the user clicks outside the modal
    window.onclick = function (event) {
        if (event.target === incorrectModal) {
            incorrectModal.style.display = "none";
            incrementQuestion();
            increaseQuestionsAnswered();
            runGame(currentQuestion);
        }
    }
}

// Inform the user of the correct answer in the incorrect answer modal
function displayCorrectAnswer() {
    let correctAnswerColour = document.getElementById("correct-answer-colour");
    let correctAnswerText = document.getElementById("correct-answer-text");

    correctAnswerColour.style.backgroundColor = correctAnswer;

    if (correctAnswer === "rgb(128, 0, 128)") {
        correctAnswerText.innerHTML = "purple";
    } else if (correctAnswer === "rgb(173, 216, 230)") {
        correctAnswerText.innerHTML = "light blue";
    } else if (correctAnswer === "rgb(0, 128, 0)") {
        correctAnswerText.innerHTML = "green";
    } else if (correctAnswer === "rgb(255, 192, 203)") {
        correctAnswerText.innerHTML = "pink";
    } else if (correctAnswer === "rgb(128, 128, 0)") {
        correctAnswerText.innerHTML = "dark yellow";
    } else if (correctAnswer === "rgb(255, 165, 0)") {
        correctAnswerText.innerHTML = "orange";
    } else if (correctAnswer === "rgb(139, 0, 0)") {
        correctAnswerText.innerHTML = "dark red";
    } else if (correctAnswer === "rgb(0, 0, 139)") {
        correctAnswerText.innerHTML = "dark blue";
    } else if (correctAnswer === "rgb(255, 255, 166)") {
        correctAnswerText.innerHTML = "light yellow";
    }
}

// Reset the game
function reset() {
    currentQuestion = 0;
    score = 0;
    questionsAnswered = 0;
    runGame();
}

// Display colour text when question span hovered over
function mouseOver() {
    let boxStyle = window.getComputedStyle(this, null);
    let boxColour = boxStyle.getPropertyValue("background-color");
    let questionBoxSpan = document.querySelectorAll(".question-colour-text");

    questionBoxSpan.forEach((span) => {
        if (boxColour === "rgb(255, 0, 0)") {
            span.innerHTML = "Red";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(0, 0, 255)") {
            span.innerHTML = "Blue";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(255, 255, 0)") {
            span.innerHTML = "Yellow";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(255, 255, 255)") {
            span.innerHTML = "White";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(0, 0, 0)") {
            span.innerHTML = "Black";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(255, 165, 0)") {
            span.innerHTML = "Orange";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(0, 128, 0)") {
            span.innerHTML = "Green";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(128, 0, 128)") {
            span.innerHTML = "Purple";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(255, 192, 203)") {
            span.innerHTML = "Pink";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(173, 216, 230)") {
            span.innerHTML = "Light Blue";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(255, 255, 166)") {
            span.innerHTML = "Light Yellow";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(139, 0, 0)") {
            span.innerHTML = "Dark Red";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(0, 0, 139)") {
            span.innerHTML = "Dark Blue";
            span.style.visibility = "visible";
        } else if (boxColour === "rgb(128, 128, 0)") {
            span.innerHTML = "Dark Yellow";
            span.style.visibility = "visible";
        } else if (boxColour === "rgba(0, 0, 0, 0)") {
            span.style.visibility = "hidden";
        }
    });
}

// Display and close the end game modal
function endGame() {
    document.getElementById("end-score").innerHTML = score;

    let close = document.getElementsByClassName("close")[5];
    endModal.style.display = "flex";

    // Close the modal when the user clicks x
    close.onclick = function () {
        endModal.style.display = "none";
        reset();
    }
    // Close the modal when the user clicks outside the modal
    window.onclick = function (event) {
        if (event.target === endModal) {
            endModal.style.display = "none";
            reset();
        }
    }
}

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
        welcomeModal.style.display = "none";
        console.log("CLOSE welcome");
        runGame(currentQuestion);
    } else if (instructionsDisplay === "flex") {
        console.log("CLOSE instructions");
        instructionsModal.style.display = "none";
    } else if (correctDisplay === "flex") {
        console.log("CLOSE correct");
        correctModal.style.display = "none";
        increaseScore();
        increaseQuestionsAnswered();
        incrementQuestion();
        runGame(currentQuestion);
    } else if (selectDisplay === "flex") {
        console.log("CLOSE select");
        selectModal.style.display = "none";
    } else if (incorrectDisplay === "flex") {
        console.log("CLOSE incorrect");
        incorrectModal.style.display = "none";
        incrementQuestion();
        increaseQuestionsAnswered();
        runGame(currentQuestion);
    } else if (endDisplay === "flex") {
        console.log("CLOSE end");
        endModal.style.display = "none";
        reset();
    } else {
        checkAnswer();
    }
}

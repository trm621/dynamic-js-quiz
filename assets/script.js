// element creators and selectors
var questions = [
    {question: "Which of the following is NOT a conditional statement?",
    choices: ["while", "for", "if", "but"],
    correctAnswer: 4},
    {question: "Which of the following letters is used to represent an iterator?", 
    choices: ["i", "p", "q", "l"],
    correctAnswer: 1},
    {question:"What does DOM stand for?",
    choices: ["Directory Object Model", "Directional Object Mode", "Document Object Model", "Directional Omni Mode"],
    correctAnswer: 3},
    {question: "What does the appendChild function do?", 
    choices: ["appends a child element to a parent element", "creates a child element", "deletes a child element", "iterates through an array"],
    correctAnswer: 1},
    {question: "When using JavaScript, where should the source file be placed in the HTML?",
    choices: ["in the head", "at the end of the body", "at the top of the body", "after the closing </html> tag"],
    correctAnswer: 2
    }];

var btn = document.createElement("button");
var h3 = document.createElement("h3");
var timer = document.getElementById("timer")
var par = document.createElement("p");
var listItem1 = document.createElement("li");
var listItem2 = document.createElement("li");
var listItem3 = document.createElement("li");
var listItem4 = document.createElement("li");
var list = document.createElement("ol");
var divC = document.createElement("div");
var body = document.body;
var timeLeft;

currQ = 0;

var generateQuiz = function() {

    }



// when user clicks button labelled "begin" the quiz will begin and take them to the first question
var beginQuiz = function() {
    btn.innerHTML = "Click here to begin! Good luck!";
    document.getElementById("start-button").appendChild(btn);
    btn.setAttribute("style", "background-color:red; color:white; padding:50px; font-size:20px; margin:auto; margin-top:100px;");
};

// the landing page will clear and the questions will begin

var clearLandingPage = function() {
    document.getElementById("wrapper").textContent = "";
};

// a timer will begin countding down from 120 seconds. Ten seconds will be deducted from time when users pick wrong selection

var countdown = function() {
    var timeLeft = 120;

    var timeInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            window.alert("You've run out of time! Let's see how you did!");
            document.getElementById("timer").textContent = "";
        } else {
        timer.textContent = timeLeft + " seconds remaining."
        timeLeft--;
        }
    }, 1000);
    return timeLeft;
};

// question one will display 
// If the correct choice is selected, the time will remain the same and the next question will display
// If the incorrect choice is selected, ten seconds will be deducted from the timer

var endScreen = function() {
     
};


// their score will be logged into the localstorage

btn.addEventListener("click", function() {
    clearLandingPage();
    countdown();
    generateQuiz();
});

beginQuiz();
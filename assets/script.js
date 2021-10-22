// element creators and selectors

var btn = document.createElement("button")
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

// when user clicks button labelled "begin" the quiz will begin and take them to the first question
var beginQuiz = function() {
    btn.innerHTML = "Click here to begin! Good luck!";
    document.getElementById("start-button").appendChild(btn);
    btn.setAttribute("style", "background-color:red; color:white; padding:50px; font-size:20px; margin:auto; margin-top:100px;");
};

var clearLandingPage = function() {
    document.getElementById("wrapper").textContent = "";
};

// a timer will begin countding down from 120 seconds

var countdown = function() {
    var timeLeft = 120;

    var timeInterval = setInterval(function() {
        if (timeLeft <= 0) {
            window.alert("You've run out of time! Let's see how you did!");
            clearInterval(timeInterval);
            document.getElementById("timer").textContent = "";
            document.getElementById("question-wrapper").textContent = "";
        } else {
        timer.textContent = timeLeft + " seconds remaining."
        timeLeft--;
        }
    }, 1000);
    console.log(timeLeft);
    return timeLeft;
};

var generateQuiz = function() {
    divC.textContent = "Question One";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    divC.appendChild(list);
    listItem1.textContent = "THIS IS A CHOICE";
        list.appendChild(listItem1);
        listItem1.setAttribute("style", "color:white; background-color:red; text-align:center;");
};    

// when user clicks one of the options, a sound will let users know if their choice is correct or incorrect

// when users select an incorrect option, time will be deducted from the countdown

// when users answer every question, they will be taken to a page letting them know how they did

// their score will be logged into the localstorage

btn.addEventListener("click", function() {
    clearLandingPage();
    countdown();
    generateQuiz();
    listItem1.addEventListener("click", function() {
        
    });
});

beginQuiz();
var btn = document.createElement("button")

// when user clicks button labelled "begin" the quiz will begin and take them to the first question
var beginQuiz = function() {
    btn.innerHTML = "Click here to begin! Good luck!";
    document.getElementById("quiz-content").appendChild(btn);
    btn.setAttribute("style", "background-color:red; color:white; padding:50px; font-size:20px; margin:auto; margin-top:100px;");
};

var generateQuiz = function() {
    document.body.innerHTML = "";

    var countdown = function() {
            var timeLeft = 1;

            var timeInterval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(timeInterval);
                window.alert("You've run out of time! Let's see how you did!");
            } else {
            timeLeft--;
            }
        }, 1000);
    }
    countdown();
    };
    

// when user clicks one of the options, a sound will let users know if their choice is correct or incorrect

// when users select an incorrect option, time will be deducted from the countdown

// when users answer every question, they will be taken to a page letting them know how they did

// their score will be logged into the localstorage

btn.addEventListener("click", function() {
    generateQuiz();  
});

beginQuiz();
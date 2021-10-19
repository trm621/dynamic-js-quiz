var btn = document.createElement("button")
var genQuestion = document.createElement("div")

// when user clicks button labelled "begin" the quiz will begin and take them to the first question

    btn.innerHTML = "Click here to begin! Good luck!";
    document.getElementById("quiz-content").appendChild(btn);
    btn.setAttribute("style", "background-color:black; color:white; padding:50px; font-size:20px; margin:auto; margin-top:100px;");

    generateQuiz = function() {
        document.getElementById("quiz-content").removeChild(btn);
    };


// a countdown will begin

// when user clicks one of the options, a sound will let users know if their choice is correct or incorrect

// when users select an incorrect option, time will be deducted from the countdown

// when users answer every question, they will be taken to a page letting them know how they did

// their score will be logged into the localstorage

btn.addEventListener("click", function() {
    generateQuiz();    
});
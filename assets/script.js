// element creators and selectors

const questions = [{question: "Which of the following is NOT a conditional statement.", 
wrongAnswers:("for", "while", "if"), rightAnswer: "but"},]

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

var generateQuiz = function() {
    for (var i=0; i < questions.length; i++) {
        divC.textContent = questions.question[i];
        btn.innerhtml = questions.rightAnswer[i] + wrongAnswers[i]
    }
}

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
        };
    }, 1000);

    console.log(timeLeft);
    return timeLeft;
};

// question one will display 
// If the correct choice is selected, the time will remain the same and the next question will display
// If the incorrect choice is selected, ten seconds will be deducted from the timer



// question two

var questionTwo = function() {
    divC.textContent = "Question Two";
    className = "question-two";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "Which of the following letters is used to represent an iterator."; 
        divC.appendChild(h3);
    divC.appendChild(list);
    listItem1.textContent = "i";
        list.appendChild(listItem1);
        listItem1.addEventListener("click", function() {
            question2 = 0,
            questionThree();
        });
    listItem2.textContent = "p";
        list.appendChild(listItem2);
        listItem2.addEventListener("click", function() {
            question2 = 1,
            questionThree();
        });
    listItem3.textContent = "r";
        list.appendChild(listItem3);
        listItem3.addEventListener("click", function() {
            question2 = 1,
            questionThree();
        });
        listItem4.textContent = "y";
        list.appendChild(listItem4);
        listItem4.addEventListener("click", function() {
            question2 = 1,
            questionThree();
        });
};

// question three

var questionThree = function() {
    divC.textContent = "Question Three";
    divC.className = "question-three";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "What does DOM stand for?"; 
        divC.appendChild(h3);
    divC.appendChild(list);
    listItem1.textContent = "Directory Object Model";
        list.appendChild(listItem1);
        listItem1.addEventListener("click", function() {
            question3 = 1,
            questionFour();
        });
    listItem2.textContent = "Directional Omni Mode";
        list.appendChild(listItem2);
        listItem2.addEventListener("click", function() {
            question3 = 1,
            questionFour();
        });
    listItem3.textContent = "Document Object Model";
        list.appendChild(listItem3);
        listItem3.addEventListener("click", function() {
            question4 = 0,
            questionFour();
        });
    listItem4.textContent = "Documentational Object Mode";
        list.appendChild(listItem4);
        listItem4.addEventListener("click", function() {
            question3 = 1,
            questionFour();
        });
};

var endScreen = function() {
    displayScore;
      divC.textContent = "Your score is " + timeLeft + " ."
};


// their score will be logged into the localstorage

btn.addEventListener("click", function() {
    clearLandingPage();
    countdown();
    generateQuiz();
});

beginQuiz();
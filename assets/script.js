// element creators and selectors

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
var timeInterval;
var question1;
var question2;
var question3;
var question4;
var question5;

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
        if (question1 === 1) {
            timeLeft = timeLeft - 10;
            question1 = question1 + 1;
        };
        if (question2 === 1) {
            timeLeft = timeLeft - 10;
            question2 = question2 + 1;
        };
        if (question3 === 1) {
            timeLeft = timeLeft - 10;
            question3 = question3 + 1;
        };
        if (question4 === 1) {
            timeLeft = timeLeft - 10;
            question4 = question4 + 1;
        };
        if (question5 === 1) {
            timeLeft = timeLeft - 10;
            question5 = question5 + 1;
        };
    }, 1000);
};

// question one will display 
// If the correct choice is selected, the time will remain the same and the next question will display
// If the incorrect choice is selected, ten seconds will be deducted from the timer

var questionOne = function() {
    className = "question-one";
    divC.textContent = "Question One";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "Which of the following is NOT a conditional statement."; 
        divC.appendChild(h3);
    divC.appendChild(list);
    listItem1.textContent = "for";
        list.appendChild(listItem1);
        listItem1.addEventListener("click", function () {
            question1 = 0,
            questionTwo();
        });
    listItem2.textContent = "while";
        list.appendChild(listItem2);
        listItem2.addEventListener("click", function() {
            question1 = 0,
            questionTwo();
        });
    listItem3.textContent = "but";
        list.appendChild(listItem3);
        listItem3.addEventListener("click", function() {
            questionTwo();
        });
    listItem4.textContent = "else";
        list.appendChild(listItem4);
        listItem4.addEventListener("click", function() {
            question1 = 0,
            questionTwo();
        });
    };    

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

// question four

var questionFour = function() {
    divC.textContent = "Question Four";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "What does the appendChild function do?"; 
        divC.appendChild(h3);
    divC.appendChild(list);
    listItem1.textContent = "appends a child element to its parent element";
        list.appendChild(listItem1);
        listItem1.addEventListener("click", function() {
            question4 = 0,
            questionFive();
        });
    listItem2.textContent = "creates a child element";
        list.appendChild(listItem2);
        listItem2.addEventListener("click", function() {
            question4 = 1,
            questionFive();
        });
    listItem3.textContent = "deletes a child element";
        list.appendChild(listItem3);
        listItem3.addEventListener("click", function() {
            question4 = 1,
            questionFive();
        });
    listItem4.textContent = "iterates through an array";
        list.appendChild(listItem4);
        listItem4.addEventListener("click", function() {
            question4 = 1,
            questionFive();
        });
};

// question five. When a selection is made, the user will be taken to the endgame page

var questionFive = function() {
    className = "question-five";
    divC.textContent = "Question Five";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "When using JavaScript, where should the source file be placed in the HTML?"; 
        divC.appendChild(h3);
    divC.appendChild(list);
    listItem1.textContent = "in the head";
        list.appendChild(listItem1);
        listItem1.addEventListener("click", function() {
            question5 = 1,
            endScreen();
        });
    listItem2.textContent = "at the top of the body";
        list.appendChild(listItem2);
        listItem2.addEventListener("click", function() {
            question5 = 1,
            endScreen();
        });
    listItem3.textContent = "after the closing </html> element";
        list.appendChild(listItem3);
        listItem3.addEventListener("click", function() {
            question5 = 1,
            endScreen();
        });
    listItem4.textContent = "at the end of the body";
        list.appendChild(listItem4);
        listItem4.addEventListener("click", function() {
            question5 = 0,
            endScreen();
        });
    };

var endScreen = function() {
     
};


// their score will be logged into the localstorage

btn.addEventListener("click", function() {
    clearLandingPage();
    countdown();
    questionOne();
});

beginQuiz();
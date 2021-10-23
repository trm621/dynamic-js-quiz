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
var timeLeft;
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

var clearLandingPage = function() {
    document.getElementById("wrapper").textContent = "";
};

// a timer will begin countding down from 120 seconds

var questionOne = function() {
    className = "question-one";
    divC.textContent = "Question One";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "Which of the following is NOT a conditional statement."; 
        divC.appendChild(h3);
    divC.appendChild(list);
        list.setAttribute("style", "list-style:none;");
    listItem1.textContent = "for";
        list.appendChild(listItem1);
        listItem1.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem1.addEventListener("click", function () {
            question1 = false,
            questionTwo();
        });
    listItem2.textContent = "while";
        list.appendChild(listItem2);
        listItem2.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem2.addEventListener("click", function() {
            return false,
            questionTwo();
        });
    listItem3.textContent = "but";
        list.appendChild(listItem3);
        listItem3.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem3.addEventListener("click", function() {
            return true,
            questionTwo();
        });
    listItem4.textContent = "else";
        list.appendChild(listItem4);
        listItem4.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem4.addEventListener("click", function() {
            return false,
            questionTwo();
        });
    };    

var questionTwo = function() {
    divC.textContent = "Question Two";
    className = "question-two";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "Which of the following letters is used to represent an iterator."; 
        divC.appendChild(h3);
    divC.appendChild(list);
        list.setAttribute("style", "list-style:none;");
    listItem1.textContent = "i";
        list.appendChild(listItem1);
        listItem1.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem1.addEventListener("click", function() {
            return true,
            questionThree();
    });
    listItem2.textContent = "p";
        list.appendChild(listItem2);
        listItem2.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem2.addEventListener("click", function() {
            return false,
            questionThree();
    });
    listItem3.textContent = "r";
        list.appendChild(listItem3);
        listItem3.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem3.addEventListener("click", function() {
            return false,
            questionThree();
    });
        listItem4.textContent = "y";
        list.appendChild(listItem4);
        listItem4.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem4.addEventListener("click", function() {
            return false,
            questionThree();
        })
};

var questionThree = function() {
    divC.textContent = "Question Three";
    divC.className = "question-three";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "What is an example of "; 
        divC.appendChild(h3);
    divC.appendChild(list);
        list.setAttribute("style", "list-style:none;");
    listItem1.textContent = "THIS IS A CHOICE";
        list.appendChild(listItem1);
        listItem1.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem1.addEventListener("click", function() {
            return false,
            questionFour();
        });
    listItem2.textContent = "THIS IS THE SECOND CHOICE";
        list.appendChild(listItem2);
        listItem2.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem2.addEventListener("click", function() {
            return false,
            questionFour();
        });
    listItem3.textContent = "THIS IS THE THIRD CHOICE";
        list.appendChild(listItem3);
        listItem3.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem3.addEventListener("click", function() {
            return false,
            questionFour();
        });
    listItem4.textContent = "THIS IS THE FOURTH CHOICE";
        list.appendChild(listItem4);
        listItem4.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem4.addEventListener("click", function() {
            return false,
            questionFour();
        });
};

var questionFour = function() {
    divC.textContent = "Question Four";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "THIS IS THE FIRST QUESTION"; 
        divC.appendChild(h3);
    divC.appendChild(list);
        list.setAttribute("style", "list-style:none;");
    listItem1.textContent = "THIS IS A CHOICE";
        list.appendChild(listItem1);
        listItem1.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem1.addEventListener("click", function() {
            return false,
            questionFive();
        })
    listItem2.textContent = "THIS IS THE SECOND CHOICE";
        list.appendChild(listItem2);
        listItem2.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem2.addEventListener("click", function() {
            return false,
            questionFive();
        });
    listItem3.textContent = "THIS IS THE THIRD CHOICE";
        list.appendChild(listItem3);
        listItem3.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem3.addEventListener("click", function() {
            return false,
            questionFive();
        });
    listItem4.textContent = "THIS IS THE FOURTH CHOICE";
        list.appendChild(listItem4);
        listItem4.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem4.addEventListener("click", function() {
            return false,
            questionFive();
        });
};

var questionFive = function() {
    className = "question-five";
    divC.textContent = "Question Five";
    body.appendChild(divC);
        divC.setAttribute("style", "font-size:30px; text-align:center;");
    h3.textContent = "THIS IS THE FIRST QUESTION"; 
        divC.appendChild(h3);
    divC.appendChild(list);
        list.setAttribute("style", "list-style:none;");
    listItem1.textContent = "THIS IS A CHOICE";
        list.appendChild(listItem1);
        listItem1.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem1.addEventListener("click", function() {
            return false,
            endScreen();
        })
    listItem2.textContent = "THIS IS THE SECOND CHOICE";
        list.appendChild(listItem2);
        listItem2.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem2.addEventListener("click", function() {
            return false,
            endScreen();
        })
    listItem3.textContent = "THIS IS THE THIRD CHOICE";
        list.appendChild(listItem3);
        listItem3.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem3.addEventListener("click", function() {
            return false,
            endScreen();
        })
    listItem4.textContent = "THIS IS THE FOURTH CHOICE";
        list.appendChild(listItem4);
        listItem4.setAttribute("style", "color:white; padding:20px; margin:auto; text-align:center; width:100px;");
        listItem4.addEventListner("click", function() {
            return false,
            endScreen();
        })
    };

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
        if (question1 === false) {
            timer.textContent = timeLeft - 10 + " seconds remaining";
        }
        if (question2 === false) {
            timer.textContent = timeLeft - 10 + " seconds remaining."
        }
        if (question3 === false) {
            timer.textContent = timeLeft - 10 + " seconds remaining."
        }
        if (question4 === false) {
            timer.textContent = timeLeft - 10 + " seconds remaining."
        }
        if (question5 === false) {
            timer.textContent = timeLeft - 10 + " seconds remaining."
        }
    }, 1000);
    console.log(timeLeft);
    return timeLeft;
};

// when user clicks one of the options, a sound will let users know if their choice is correct or incorrect

// when users select an incorrect option, time will be deducted from the countdown

// when users answer every question, they will be taken to a page letting them know how they did

// their score will be logged into the localstorage

btn.addEventListener("click", function() {
    clearLandingPage();
    countdown();
    questionOne();
});



beginQuiz();
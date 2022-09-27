var timerEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var feedbackEl = document.createElement("div");
var removeFeedback = document.querySelector("#removeFeedback");

var currentQuestionIndex = 0;
var time = 90;
var timerId;
startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighscore;
initialsEl.onkeyup = submit;

feedbackEl.setAttribute("class", "feedback");

var questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: [
      "<javascript>", 
      "<scripting>", 
      "<js>", 
      "<script>"
    ],
    answer: "<script>"
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: [
      "The <body> section",
      "The <head> section",
      "Both the <head> section and the <body> section are correct",
      "Inside the JavaScript file"
    ],
    answer: "Both the <head> section and the <body> section are correct"
  },
  {
    title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      "<script ='xxx.js'>", 
      "<script href='xxx.js'", 
      "<script src='xxx.js'>", 
      "<script name='xxx.js'>"
    ],
    answer: "<script src='xxx.js'>"
  },
  {
    title: "How do you write 'Hello World' in an alert box?",
    choices: [
      "alert('Hello Word');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alertBox('Hello World');"
    ],
    answer: "alert('Hello Word');"
  },
  {
    title:
      "How do you create a function in JavaScript?",
    choices: [
      "function myFunction()",
      "function = myFunction()", 
      "function:myFunction()", 
      "create.function()", 
    ],
    answer: "function myFunction()"
  },
  {
    title: "How do you call a function named 'myFunction'?",
    choices: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
      "call(myFunction)"
    ],
    answer: "myFunction()"
  },
  {
    title: "How to write an IF statement in JavaScript?",
    choices: [
      "if i = 5", 
      "if i == 5 then", 
      "if (i == 5)", 
      "if i = 5 then"
    ],
    answer: "if (i == 5)"
  },
  {
    title: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    choices: [
      "if i =! 5 then",
      "if (i <> 5)",
      "if i <> 5",
      "if ( i !=5)"
    ],
    answer: "if ( i !=5)"
  },
  {
    title:
      "How does a WHILE loop start?",
    choices: [
      "while (i <= 1-; i++)", 
      "while i = 1 to 10", 
      "while (i <= 10)", 
      "while (i) = 1 - 10"
    ],
    answer: "while (i <= 10)"
  },
  {
    title: "How does a FOR loop start?",
    choices: [
      "for (i = 0; i <= 5; i++)", 
      "for i = 1 to 5", 
      "for (i = 0; i <= 5)", 
      "for (i <= 5; i++)"
    ],
    answer: "for (i = 0; i <= 5; i++)"
  }
];

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");

  timerEl.textContent = time;
  timerId = setInterval(clockTick, 1000);

  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");

  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function(choice, i) {

    var selectChoice = document.createElement("button");
    selectChoice.setAttribute("class", "choice");
    selectChoice.setAttribute("value", choice);

    selectChoice.textContent = choice;

    selectChoice.onclick = questionClick;

    choicesEl.appendChild(selectChoice);
  });
}

function questionClick() {
  
  if (this.value !== questions[currentQuestionIndex].answer) {

    time -= 10;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;
    removeFeedback.appendChild(feedbackEl);
    feedbackEl.textContent = "Incorrect!";
    feedbackEl.style = "color: #FF5757";
  } else {
    removeFeedback.appendChild(feedbackEl);
    feedbackEl.textContent = "Correct!";
    feedbackEl.style = "color: #C9E265";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    quizEnd();
    removeFeedback.removeChild(feedbackEl);
    feedbackEl.style = "display: none"
  } else {
    getQuestion();
  }
};

function quizEnd() {

  clearInterval(timerId);


  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");


  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  questionsEl.setAttribute("class", "hide");
};

function clockTick() {

  time--;
  timerEl.textContent = time;


  if (time <= 0) {
    quizEnd();
  }
};

function saveHighscore() {

  var initials = initialsEl.value.trim();

  if (initials !== "") {
  
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];


    var newScore = {
      score: time,
      initials: initials
    };

 
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));


    window.location.href = "highscore.html";
  }
};

function submit(event) {

  if (event.key === "submit") {
    saveHighscore();
  }
};


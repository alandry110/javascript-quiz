var questionContainerElement = document.getElementById('question-container')
var answerButtonsElement = document.getElementById('answer-buttons')
var timerEl = document.getElementById('countdown')
var startBtn = document.getElementById('startButton')
var startQuiz = document.getElementById('startHeader')
var questionsEl = document.getElementById('questions')
var startTimer = 90

timerEl.textContent = startTimer

var questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { choice1: '<javascript>', correct: false },
      { choice2: '<scripting>', correct: false },
      { choice3: '<js>', correct: false },
      { choice4: '<script>', correct: true },
    ]
  },

  {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
      { choice1: 'The <body> section', correct: false },
      { choice2: 'The <head> section', correct: false },
      { choice3: 'Both the <head> section and the <body> section are correct', correct: true },
      { choice4: 'Inside the JavaScript file', correct: false },
    ]
  },

  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: [
      { choice1: '<script ="xxx.js">', correct: false },
      { choice2: '<script href=”xxx.js”>', correct: false },
      { choice3: '<script src=”xxx.js”>', correct: true },
      { choice4: '<script name=”xxx.js”>', correct: false },
    ]
  },

  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { choice1: 'alert(“Hello Word”);', correct: true },
      { choice2: 'msg(“Hello World”);', correct: false },
      { choice3: 'msgBox(“Hello World”);', correct: false },
      { choice4: 'alertBox(“Hello World”);', correct: false },
    ]
  },

  {
    question: 'How do you create a function in JavaScript?',
    answers: [
      { choice1: 'function myFunction()', correct: true },
      { choice2: 'function = myFunction()', correct: false },
      { choice3: 'function:myFunction()', correct: false },
      { choice4: 'create.function()', correct: false },
    ]
  },

  {
    question: 'How do you call a function named "myFunction"?',
    answers: [
      { choice1: 'call myFunction()', correct: false },
      { choice2: 'myFunction()', correct: true },
      { choice3: 'call function myFunction()', correct: false },
      { choice4: 'call(myFunction)', correct: false },
    ]
  },

  {
    question: 'How to write an IF statement in JavaScript?',
    answers: [
      { choice1: 'if i = 5', correct: false },
      { choice2: 'if i == 5 then', correct: false },
      { choice3: 'if (i == 5)', correct: true },
      { choice4: 'if i = 5 then ', correct: false },
    ]
  },

  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: [
      { choice1: 'if i =! 5 then ', correct: false },
      { choice2: 'if (i <> 5)', correct: false },
      { choice3: 'if i <> 5', correct: false },
      { choice4: 'if ( i !=5)', correct: true },
    ]
  },

  {
    question: 'How does a WHILE loop start?',
    answers: [
      { choice1: 'while (i <= 1-; i++)', correct: false },
      { choice2: 'while i = 1 to 10', correct: false },
      { choice3: 'while (i <= 10)', correct: true },
      { choice4: 'while (i) = 1 - 10', correct: false },
    ]
  },

  {
    question: 'How does a FOR loop start?',
    answers: [
      { choice1: 'for (i = 0; i <= 5; i++)', correct: true },
      { choice2: 'for i = 1 to 5 ', correct: false },
      { choice3: 'for (i = 0; i <= 5)', correct: false },
      { choice4: 'for (i <= 5; i++)', correct: false },
    ]
  }
]

startBtn.addEventListener('click', function(e) {
  e.stopPropagation()
  startQuiz.classList.add('hide')
  questionsEl.classList.remove('hide')
  
  // start the timer at 90 sec when you click 'start quiz'
  var interval = setInterval(() => {
    timerEl.textContent = startTimer
    startTimer--
  }, 1000);

  //add in questions from array 
  for (var q = 0; q < questions.length; q++) {
    var question = questions[q].question;
    document.write (question);
    for (var a = 0; a < answers.length; a++) {
      var answers = questions[a].answers;
      document.write (answers);
    }
    
  
  }
})


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//create variables

var time = 90;
var currentquestionindex = 0;
var timerid;

var questionsarray= [{
    question: ("What does API stand for?"),
    choices: ['application programming interfaces', 'application programming idea', 'artistic programming interface', 'artistic programming idea'], 
    answer: 'application programming interfaces'
},

 {
    question: ("What does DOM stand for?"),
    choices: ['Document Outer Model', 'Direct Outer Meaning', 'Document Object Model', 'Direct Object Model'], 
    answer: 'Document Object Model'
},

 {
    question: ("What does CSS stand for?"),
    choices: ['complete style sheets', 'complete simple sheets', 'cascading simple sheets', 'cascading style sheets'], 
    answer: 'cascading style sheets'
},

{
    question: ("What does HTML stand for?"),
    choices: ['hypertext marketing laws', 'hypertext marketing language', 'hypertext markup laws', 'hypertext markup language'], 
    answer: 'hypertext markup language'
}
];


var questionsel = document.querySelector("#questions");
var timerel = document.getElementById("time");
var choicesel = document.getElementById("choices");
var submitbtn = document.getElementById("submit");
var startbtn = document.getElementById("start");
var initialsel = document.getElementById("initials");
var playerscore = document.getElementById("score");
// var highscores = document.getElementById("userHighscores");
var highscoresel = document.getElementById("highscorespage");
var endscreenel = document.getElementById("enterInitials");


//start  button

startbtn.onclick = startgame;

function startgame(){

  var startscreenel = document.getElementById("startscreen");
  startscreenel.setAttribute("class", "hide");
  questionsel.removeAttribute("class", "hide");
  timerid = setInterval(clocktick,1000);
  timerel.textContent = time;
  playgame();     
}

function clocktick () {
    time--;
    timerel.textContent = time;
    if (time <= 0) {
        quizend();
    }
}
//present question and timer starts
function playgame() {
      //get current question, set the title of the question to be the question, populate with choices
      var currentquestion = questionsarray[currentquestionindex];
      var titleel = document.getElementById("questiontitle");
      console.log (titleel);
      titleel.textContent = currentquestion.question;
      console.log (currentquestion);
      choicesel.innerHTML = "";
      for (var i = 0; i < currentquestion.choices.length; i++){
        var choice = currentquestion.choices[i];
        var choicenode = document.createElement("button");
        choicenode.setAttribute("class", "choice selection" +i);
        choicenode.setAttribute("value", choice);
        choicenode.textContent = choice;
        choicesel.appendChild(choicenode);
        choicenode.addEventListener("click", clickchoice);
        console.log(choicenode);
    
      }
}

//function to handle when a user clicks a choice
    //increment the current question index
function clickchoice (e){
    console.log();
 if (e.path[0].textContent === questionsarray[currentquestionindex]["answer"]) {
    currentquestionindex++;
 }
 else {time = time-10;    
}

if (currentquestionindex<4) {playgame()}
else (quizend());

 } 


function quizend (){
    //clear interval, show end screen, hide questions
    clearInterval(timerid);
    if (time<0) {time=0;
        timerel.textContent = time;};
    // timerel.textContent = time;
    questionsel.setAttribute("class", "hide");
    
    endscreenel.removeAttribute("class", "hide");
    playerscore.textContent = time;
    var savebutton = document.getElementById("submit");
    // savebutton.addEventListener.apply('click', saveinfo);
    savebutton.onclick = saveinfo;
    
}

// saveinitials and score
function saveinfo(e) {
    e.preventDefault();
    // playerscore.textContent = time;
    playerscore.value = time;
    console.log(playerscore);
    console.log(initialsel.value);
    // if (!userInitials){alert ("You must enter initials to save high score")
    // return;
    // };
    var highscores =  [initialsel.value, time];
        
    //pull then push;
    localStorage.setItem("highscores", JSON.stringify(highscores));
    
    displayhighScores();
}

//display scores
function displayhighScores() {
    highscoresel.removeAttribute("class", "hide");
    endscreenel.setAttribute("class", "hide");
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    document.getElementById("userHighscores").append(highscores[0] + " " + highscores[1]);

    //pull arrays from local storage
    //for loop to cycle through arrays and display content
    
    //event listener for clear button
    //event listener for play again
    // var restart = document.getElementById("playagain");
    // restart.addEventListener("click", startgame);
}
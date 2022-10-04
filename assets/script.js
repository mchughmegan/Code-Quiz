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

var time = 60;
var currentquestionindex = 0;
var timerid;


var questionsel = document.getElementById("questions");
var timerel = document.getElementById("time");
var choicesel = document.getElementById("choices");
var submitbtn = document.getElementById("submit");
var startbtn = document.getElementById("start");
var initialsel = document.getElementById("initials");

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
      var currentquestion = questions[currentquestionindex];
      var titleel = document.getElementById("questiontitle");
      titleel.textcontent = currentquestion.question;
      choicesel.innerHTML = "";
      for (var i = 0; i < currentquestion.choices.length; i++){
        var choice = currentquestion.choices[i];
        var choicenode = document.createElement("button");
        choicenode.setAttribute("class", "choice");
        choicenode.setAttribute("value", choice);
        choicenode.textContent= i+1+". " + choice;
        choicesel.appendChild(choicenode);
      }
}

//function to handle when a user clicks a choice
    //increment the current question index
function clickchoice {

    
}


//display scores
function highScores (){

}

function quizend (){
    //clear interval, show end screen, hide questions
    time = 0;
    questionsel.setAttribute("class", "hide");
    var endscreenel = document.getElementById("enterInitials");
    endscreenel.removeAttribute("class", "hide");

}

//saveinitials and score
function inputInitials () {
     
}
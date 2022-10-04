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

var question1: {
    h2: "What does API stand for?",
    choice: ['application programming interfaces', 'application programming idea', 'artistic programming interface', 'artistic programming idea'], 
    rightanswer: 0
};

var question2: {
    h2: "What does DOM stand for?",
    choice: ['Document Outer Model', 'Direct Object Meaning', 'Document Object Model', 'Direct Object Model'], 
    rightanswer: 2
};

var question3: {
    h2: "What does CSS stand for?",
    choice: ['complete style sheets', 'complete simple sheets', 'cascading simple sheets', 'cascading style sheets'], 
    rightanswer: 3
};

var score = 0;
var points = 100;

//start  button
function startgame(){}

//present question and timer starts
function playgame() {}

//saveinitials and score
function inputInitials () {}

//display scores
function highScores (){}
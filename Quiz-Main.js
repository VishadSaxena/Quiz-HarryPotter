var readlineSync = require("readline-sync");

console.log("Hi!! Welcome to Potterverse Quiz.");

console.log("------------------");

var userName = readlineSync.question ("What is your name? ");

console.log("Hi ", userName, "Lets play the Potterverse quiz");

var score = 0;

function quiz(question,answer){

    var userAnswer = readlineSync.question(question);

    if(userAnswer === answer){
        
        console.log("Correct !! ");
        score++;
    }
    else{

        console.log("Ohhh Incorrect :(");

    }
}

var questionOne = {
    question : "Who was a bad Character among Harry, Ron, Hermione and Draco? ",
    answer : "Draco"
  }
  var questionTwo = {
    question : "Who was the passout among Harry, Ron, Hermione and Draco? ",
    answer : "Hermione"
  }
  var questionThree = {
    question : "Who was not a prefect among Harry, Ron, Hermione and Draco? ",
    answer : "Harry"
  }
  var questionFour = {
    question : "Who was not a same house among Harry, Ron, Hermione and Draco? ",
    answer : "Draco"
  }
  var questionFive = {
    question : "Who was a Weasley among Harry, Ron, Hermione and Draco? ",
    answer : "Ron"
  }

  var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];

  for( var i = 0; i < questions.length; i++){
      quiz(questions[i].question,questions[i].answer)
  }

  console.log("--------------------");
  console.log("Your score is ",score);

  
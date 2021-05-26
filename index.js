var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question('What is your name? ');
console.log(chalk.yellow('Welcome ' + userName)+ '! Wanna play this game? \n');
console.log(chalk.bgRed(" Rules "));
console.log(chalk.blue("1. Please type in lowercase and without any gap... Let's see who is the greatest fan!"));

var score = 0;

function play (question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Yes!! You are right!") ;
    score++;         
  }else {
    console.log("Oh! you are wrong.");
  }
  console.log(chalk.green('Your Score is: ') + chalk.yellow(score));
  console.log("--------------------------------------------")
}

var questions = [{
    question: "Q1. Who is the most intelligent BTS Singer? ",
    answer: "rm" },
  {
    question: "Q2. Who is the most young Singer of BTS? ",
    answer: "jungkook"},
  {
    question: "Q3. Which BTS Singer learned english by watching 'Friends'? ",
    answer: "rm"
},{
  question: "Q4. Which singer uses his both hands to write? ",
  answer: "v"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

if (score >= 2) {
  console.log(chalk.italic("Yay!! You are the greatest BTS FAN."));
  console.log(chalk.green("Your score is: ") +chalk.yellow(score) +"\n");
}else {
  console.log("Your score is: "+score);
  console.log("Thanks for playing the game... As you don't know much about BTS, so here are the answers");
  console.log("1. rm");
  console.log("2. jungkook");
  console.log("3. taehyung");
  console.log("4. jungkook \n")
}

console.log(chalk.red.bold("*Spoiler Alert!"));

console.log("The creater of this game is not a BTS Fan");
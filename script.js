$(document).ready(function(){
var currentTotal = $("#currentTotal")
var playerAccount = $("#playerAccount")
var name = prompt("Please enter your first name");
  playerAccount = playerAccount.html(name);
  alert("You have entered the game of Jeopardy! Please start the game by selecting any box on the board. Might we suggest starting with a category you feel strongest in? Good Luck! The game ends when you've answered all questions on the board.")

//Category 1: United Nature Calls
//Question 1
var one200 = $("#one200");
one200[0].addEventListener("click", function(){
  var answer = prompt("Which river flows through Washington, D.C.?");
  if (answer === "potomac river"){
      (currentTotal += 200);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 200);
  }
})
//Question 2
var one400 = $("#one400");
one400[0].addEventListener("click", function(){
  var answer = prompt("What is the Northern most state in the U.S.A.?");
  if (answer === "alaska"){
      (currentTotal += 400);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      currentTotal -= 400;
  }
})
//Question 3
var one800 = $("#one800");
one800[0].addEventListener("click", function(){
  var answer = prompt("In what state is the only rainforst in the United States?");
  if (answer === "washington"){
      (currentTotal += 800);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      currentTotal -= 800;
  }
})
//Question 4
var one1000 = $("#one1000");
one1000[0].addEventListener("click", function(){
  var answer = prompt("What historical path extends 440 miles from Mississippi to Nashville, TN");
  if (answer === "natchez trace"){
      (currentTotal += 1000);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      currentTotal -= 1000;
  }
})
//Category 2: Sports Authority
//Question 1
var two200 = $("#two200");
two200[0].addEventListener("click", function(){
  var answer = prompt("Which popular european men's sport is played by predominantely women in the United States");
  if (answer === "field hockey"){
      (currentTotal += 200);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 200);
  }
})
//Question 2
var two400 = $("#two400");
two400[0].addEventListener("click", function(){
  var answer = prompt("Who did Novak Djokavic defeat in this years Wimbledon final?");
  if (answer === "Roger Federer"){
      (currentTotal += 400);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 400);
  }
})
//Question 3
var two800 = $("#two800");
two800[0].addEventListener("click", function(){
  var answer = prompt("How many games is Tom Brady suspended for after being found guilty of Deflate-gate?");
  if (answer === "Four"){
      (currentTotal += 800);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 800);
  }
})
//Question 4
var two1000 = $("#two1000");
two1000[0].addEventListener("click", function(){
  var answer = prompt("Which NBA basketball team has won the most Championships?");
  if (answer === "boston celtics"){
      (currentTotal += 1000);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 1000);
  }
})
//Category 3: Cinematic X-Files
//Question 1
var three200 = $("#three200");
three200[0].addEventListener("click", function(){
  var answer = prompt("Who phoned home in the Steven Spielbergs 80's alien hit?");
  if (answer === "ET"){
      (currentTotal += 200);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 200);
  }
})
//Question 2
var three400 = $("#three400");
three400[0].addEventListener("click", function(){
  var answer = prompt("Which actor played a starring role in two major blockbuster alien movies from the 90s?");
  if (answer === "Will Smith"){
      (currentTotal += 400);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 400);
  }
})
//Question 3
var three800 = $("#three800");
three800[0].addEventListener("click", function(){
  var answer = prompt("You know what the difference is between you and me?");
  if (answer === "I make this look good"){
      (currentTotal += 800);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 800);
  }
})
//Question 4
var three1000 = $("#three1000");
three1000[0].addEventListener("click", function(){
  var answer = prompt("What year was The X-Files movie released?");
  if (answer === "1998"){
      (currentTotal += 1000);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 1000);
  }
})
//Category 4: Smooth Oldies
//Question 1
var four200 = $("#four200");
four200[0].addEventListener("click", function(){
  var answer = prompt("Which icon started out as the youngest member of his family band?");
  if (answer === "Michael Jackson"){
      (currentTotal += 200);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 200);
  }
})
//Question 2
var four400 = $("#four400");
four400[0].addEventListener("click", function(){
  var answer = prompt("Who was the lead singer of The Supremes?");
  if (answer === "Diana Ross"){
      (currentTotal += 400);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 400);
  }
})
//Question 3
var four800 = $("#four800");
four800[0].addEventListener("click", function(){
  var answer = prompt("The Four Tops, Marvin Gaye, and The Temptations were all part of this record company.");
  if (answer === "Motown"){
      (currentTotal += 800);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 800);
  }
})
//Question 4
var four1000 = $("#four1000");
four1000[0].addEventListener("click", function(){
  var answer = prompt("Who sings 'My Guy'?");
  if (answer === "Mary Wells"){
      (currentTotal += 1000);
      alert("Correct!");
  }
  else {
      alert("Sorry, " + name + ", that's not correct.");
      (currentTotal -= 1000);
  }
})
})

//Function to count correct answers and print results to documents
function myFunction() {
  //create variables to count correct answers
  var correctAnswers = 0;
  var answers = []
  var q = []
  var scores = []
  var average = 0;
  

 //Create variables for each questions input value
 var q1 = document.getElementById("q1c").checked
 var q2 = document.getElementById("q2a").checked
 var q3 = document.getElementById("q3a").checked
 var q4 = document.getElementById("q4b").checked
 var q5 = document.getElementById("q5c").checked
 var q6 =document.getElementById("q6b").checked
 var q7 =document.getElementsById("q7a").checked

 //Assign correct answers to field inputs
 if (q1) {
   correctAnswers +=1;
 } if (q2) {
   correctAnswers +=1;
 } if (q3) {
   correctAnswers +=1;
 } if (q4) {
   correctAnswers +=1;
 } if (q5) {
   correctAnswers +=1;
 } if (q6) {
   correctAnswers +=1;
 } if (q7) {
   correctAnswers +=1;
 }
//Print results to document dependent on outcome
document.getElementById("result").innerHTML =
}

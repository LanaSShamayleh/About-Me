/* eslint-disable no-var */
/* eslint-disable new-cap */

'use strict';

var userName = prompt('What is your name ?');

alert('Welcome ' + userName + ' .This My website 🙈 ,Lets we play a small game before to see the page!');


var Q1= prompt('Are my age is 24 years old?');


let count = 0;

function Qes1(Q1) {

  if (Q1.toLowerCase() === 'yes') {
    alert('Your Anwer is not Correct , Try again 😎');
  }
  else if (Q1.toLowerCase() === 'no') {
    alert('Your Anwer is  Correct 😉');
    console.log('Your Anwer in question (1) is  Correct ');

    count++;
  }
  else {
    alert('You Answer must be (yes/no) ');
  }
}

Qes1(Q1);

var Q2 = prompt(' What is my major🤨? Do you think is the communication engineer 😋? ');


function Qes2(Q2) {
  if (Q2.toLowerCase() === 'yes') {

    alert('Your Anwer is  Correct 😉');

    console.log('Your Anwer in question (2) is  Correct ');
    count++;
  }
  else if (Q2.toLowerCase() === 'no' ) {
    alert('Your Anwer is not Correct , Try again 😎');
  }
  else {
    alert('You Answer must be (yes/no)');
  }
}

Qes2(Q2);


var Q3= prompt(' Do you think winter is my season 🌨 ? ');


function Qes3(Q3) {
  if (Q3.toLowerCase() === 'yes' ) {

    alert('Your Anwer is  Correct 😎');

    console.log('Your Anwer in question (3) is  Correct , Go ahead');

    count++;
  }
  else if (Q3.toLowerCase() === 'no') {
    alert('Your Anwer is not Correct , Try again');
  }
  else {
    alert('You Answer must be (yes/no) ');
  }
}

Qes3(Q3);


var Q4= prompt('What is my Futur Goals🤨? Do you think to be Web Developer 😋?');


function Qes4(Q4) {

  if (Q4.toLowerCase() === 'yes' ) {
    alert('Your Anwer is not Correct ,Try again 😎');
  }
  else if (Q4.toLowerCase() === 'no' ) {

    alert('Your Anwer is  Correct ');
    console.log('Your Anwer in question (4) is  Correct , we finished 😋');
    count++;
  }
  else {
    alert('You Answer must be (yes/no) ');
  }
}

Qes4(Q4);

if (count < 4)
  alert('Thanks!' + userName + ' for play with us , You was a great Person and yeah you got \n' + count + '/7 hope see you again  ');
else
  alert('Thanks! ' + userName + ' for play with us , You was a great Person and yeah you got \n' + count + '/7,Congrats 😉');

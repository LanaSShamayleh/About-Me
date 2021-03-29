/* eslint-disable no-var */
/* eslint-disable new-cap */

'use strict';

var userName = prompt('Hey😉 What is your name ?');

alert('Welcome ' + userName + ' .This My website 🙈 ,Lets we play a small game before to see the page!');

let count = 0;

var Q1= prompt('Are my age is 24 years old? You Answer must be (yes/no) or(y,n) ');

Qes1(Q1);

var Q2 = prompt(' What is my major🤨? Do you think is the communication engineer 😋?You Answer must be (yes/no) or(y,n) ');

Qes2(Q2);


var Q3= prompt(' Do you think winter is my season 🌨 ?You Answer must be (yes/no) or(y,n) ');


Qes3(Q3);


var Q4= prompt('What is my Futur Goals🤨? Do you think to be Web Developer 😋? You Answer must be (yes/no) or(y,n) ');

Qes4(Q4);


if (count < 2)
  alert('Thanks!' + userName + ' for play with us , You was a great Person and yeah you got \n' + count + '/4 hope see you again  ');
else
  alert('Thanks! ' + userName + ' for play with us , You was a great Person and yeah you got \n' + count + '/4,Congrats 😉');


//next

function Qes1(Q1) {

  if (Q1.toLowerCase() === 'yes' || Q1.toLowerCase() === 'y') {
    alert('Your Anwer is Correct 😎');

    console.log('Your Anwer in question (1) is  Correct ');

    count++;
  }
  else if (Q1.toLowerCase() === 'no' || Q1.toLowerCase() === 'n') {
    alert('Your Anwer is not Correct 😉');

  }
  else {
    alert('You Answer must be (yes/no) or(y,n)');
  }
}
// next

function Qes2(Q2) {
  if (Q2.toLowerCase() === 'yes'|| Q2.toLowerCase() === 'y' ) {

    alert('Your Anwer is  Correct 😉');

    console.log('Your Anwer in question (2) is  Correct ');
    count++;
  }
  else if (Q2.toLowerCase() === 'no' || Q2.toLowerCase() === 'n' ) {
    alert('Your Anwer is not Correct , Try again 😎');
  }
  else {
    alert('You Answer must be (yes/no) or(y,n) ');
  }
}

// next

function Qes3(Q3) {
  if (Q3.toLowerCase() === 'yes' || Q3.toLowerCase() === 'y') {

    alert('Your Anwer is  Correct 😎');

    console.log('Your Anwer in question (3) is  Correct , Go ahead');

    count++;
  }
  else if (Q3.toLowerCase() === 'no' || Q3.toLowerCase() === 'n') {
    alert('Your Anwer is not Correct , Try again');
  }
  else {
    alert('You Answer must be (yes/no) or(y,n)  ');
  }
}

// next

function Qes4(Q4) {

  if (Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y') {
    alert('Your Anwer is Correct  😎');
    console.log('Your Anwer in question (4) is  Correct , we finished 😋');
    count++;
  }
  else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n') {

    alert('Your Anwer is not Correct ');
  }else {
    alert('You Answer must be (yes/no) or(y,n) ');
  }
}

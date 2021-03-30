/* eslint-disable no-var */
/* eslint-disable new-cap */

'use strict';

var userName = prompt('Hey😉 What is your name ?');

alert('Welcome ' + userName + ' .This is My website 🙈 ,Lets we play a small game before to see this page!');

let count = 0;

var Q1= prompt('Are my age is 24 years old? Your Answer must be (yes/no) or(y,n) ');

Qes1(Q1);

var Q2 = prompt(' What is my major🤨? Do you think it is the communication engineer 😋?Your Answer must be (yes/no) or(y,n) ');

Qes2(Q2);


var Q3= prompt(' Do you think the winter is my season 🌨 ?Your Answer must be (yes/no) or(y,n) ');


Qes3(Q3);


var Q4= prompt('What is My Future Goals🤨? Do you think to be a Web Developer 😋? Your Answer must be (yes/no) or(y,n) ');

Qes4(Q4);

var Q5= prompt('Do You think that a writing is one of my hobbies? Your Answer must be (yes/no) or(y,n) ');

Qes5(Q5);


var Q6= prompt('What is my favourite teacher in ASAC 😍😍? Do you think my favorite teacher is Mais Abdalrazeq!!consider it a bonus question, the answer is yes 😎😎😎 , but Your Answer must be (yes/no) or(y,n)😂 ');

Qes6(Q6);

var Q7= prompt('Do you think my website is need to update ⌨ ? Your Answer must be (yes/no) or(y,n) ');

Qes7(Q7);

if (count < 4)
  alert(`Thanks ${userName} for play with us , You was a great person and  you got ${count}/7 hope see you again `);
else
  alert(`Thanks${userName} for play with us , You was a great person and you got ${count}/7, Congrats 😉`);


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
    alert('Your Answer must be (yes/no) or(y,n)');
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
    alert('Your Answer must be (yes/no) or(y,n) ');
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
    alert('Your Answer must be (yes/no) or(y,n)  ');
  }
}

// next

function Qes4(Q4) {

  if (Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y') {
    alert('Your Anwer is Correct  😎');
    console.log('Your Anwer in question (4) is  Correct');
    count++;
  }
  else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n') {

    alert('Your Anwer is not Correct ');
  }else {
    alert('Your Answer must be (yes/no) or(y,n) ');
  }
}

function Qes5(Q5) {

  if (Q5.toLowerCase() === 'yes' || Q5.toLowerCase() === 'y') {
    alert('Your Anwer is Correct  😎');
    console.log('Your Anwer in question (5) is  Correct ');
    count++;
  }
  else if (Q5.toLowerCase() === 'no' || Q5.toLowerCase() === 'n') {

    alert('Your Anwer is not Correct ');
  }else {
    alert('Your Answer must be (yes/no) or(y,n) ');
  }
}

function Qes6(Q6) {

  if (Q6.toLowerCase() === 'yes' || Q6.toLowerCase() === 'y') {
    alert('Your Anwer is Correct  😎');
    console.log('Your Anwer in question (6) is  Correct ');
    count++;
  }
  else if (Q6.toLowerCase() === 'no' || Q6.toLowerCase() === 'n') {

    alert('Your Anwer is not Correct ');
  }else {
    alert('Your Answer must be (yes/no) or(y,n) ');
  }
}

function Qes7(Q7) {

  if (Q7.toLowerCase() === 'yes' || Q7.toLowerCase() === 'y') {
    alert('Your Anwer is Correct  😎');
    console.log('Your Anwer in question (7) is  Correct , we finished 😋');
    count++;
  }
  else if (Q7.toLowerCase() === 'no' || Q7.toLowerCase() === 'n') {

    alert('Your Anwer is not Correct ');
  }else {
    alert('Your Answer must be (yes/no) or(y,n) ');
  }
}

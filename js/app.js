/* eslint-disable no-var */
/* eslint-disable new-cap */

'use strict';

// First part - prompt and calling

var userName = prompt('Hey😉 What is your name ?');

let count = 0;
let answer;
alert('Welcome ' + userName + ' .This is My website 🙈 ,Lets we play a small game before to see this page!');

// First Function
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
// next function

function Qes2(Q2) {
  if (Q2.toLowerCase() === 'yes' || Q2.toLowerCase() === 'y') {

    alert('Your Anwer is  Correct 😉');

    console.log('Your Anwer in question (2) is  Correct ');
    count++;
  }
  else if (Q2.toLowerCase() === 'no' || Q2.toLowerCase() === 'n') {
    alert('Your Anwer is not Correct , Try again 😎');
  }
  else {
    alert('Your Answer must be (yes/no) or(y,n) ');
  }
}

// next function

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

// next function

function Qes4(Q4) {

  if (Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y') {
    alert('Your Anwer is Correct  😎');
    console.log('Your Anwer in question (4) is  Correct');
    count++;
  }
  else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n') {

    alert('Your Anwer is not Correct ');
  } else {
    alert('Your Answer must be (yes/no) or(y,n) ');
  }
}

// next function

function Qes5(Q5) {

  if (Q5.toLowerCase() === 'yes' || Q5.toLowerCase() === 'y') {
    alert('Your Anwer is Correct  😎');
    console.log('Your Anwer in question (5) is  Correct ');
    count++;
  }
  else if (Q5.toLowerCase() === 'no' || Q5.toLowerCase() === 'n') {

    alert('Your Anwer is not Correct ');
  } else {
    alert('Your Answer must be (yes/no) or(y,n) ');
  }
}

// next function

function Qes6() {

  var Array = ['try to guess my lucky number ( 1 and 10 )', 'If i would to change one my hobbies, which one would i change it?'];

  let n;
  for (n = 0; n < 4; n++) {

    answer = prompt('Hey' + userName + '! this is the last question,so ' + Array[0] + '.Note you have only ' + (4 - n) + 'attempts! ');
    switch (answer) {
    case '1':
    case '2':
    case '3':
    case '4':

      alert('lessly close to reaching !');
      break;

    case '5':
    case '9':
    case '10':

      alert('highly close to reaching!');
      break;

    case '6':
    case '8':

      alert('hmmmmm try to pick in between 😋!');

      break;

    case '7':
      count++;
      console.log('Your Anwer in question (9) is  Correct , we finished 😋');
      n = 5;
      break;
    default:
      alert('Please pick a number from the range ( 1 to 10 ) only');

    }
  }
}

// next function

function Qes7() {
  var Q7Ans;
  var Levels = ['code101', 'code102', 'code201', 'code301'];
  var correct = false;
  var k = 0;

  while (k < 6) {

    console.log(k, 'attempt');

    Q7Ans = prompt('What are the Levels that I took in the Web Development Course ,you have 6 attempts to guess the correct answer\n Hint: The answer include the name of code 🙄 ');

    for (var j = 0; j < Levels.length; j++) {


      if (Q7Ans.toLowerCase() === Levels[j]) {

        alert(` Very Good 😉. This is a Correct Answer,See all correct answers about my levels \n ('  ${Levels} ') .`);
        console.log('Your Anwer in question (8) is  Correct ');
        correct = true;
        count++;
        break;
      }
    }
    if (correct)
      break;


    alert('Wrong Answer ⁉, ' + (5 - k) + ' Attempt remain');
    k++;
  }

  if (!correct)
    alert(`you didn't guess,the correct answer its any one code of this list\n (' ${Levels} ') ,hope see you again `);
}

//  Second part - Prompt and Calling

var Q1 = prompt('Are my age is 24 years old? Your Answer must be (yes/no) or(y,n) ');
Qes1(Q1);

var Q2 = prompt(' What is my major🤨? Do you think it is the communication engineer 😋?Your Answer must be (yes/no) or(y,n) ');
Qes2(Q2);

var Q3 = prompt(' Do you think the winter is my season 🌨 ?Your Answer must be (yes/no) or(y,n) ');
Qes3(Q3);

var Q4 = prompt('What is My Future Goals🤨? Do you think to be a Web Developer 😋? Your Answer must be (yes/no) or(y,n) ');
Qes4(Q4);

var Q5 = prompt('Do You think that a writing is one of my hobbies? Your Answer must be (yes/no) or(y,n) ');
Qes5(Q5);

Qes6();

Qes7();

if (count < 4) {
  alert(`Thanks ${userName} for play with us , You was a great person and  you got ${count}/7 hope see you again `);
} else {
  alert(`Thanks${userName} for play with us , You was a great person and you got ${count}/7, Congrats 😉`);
}


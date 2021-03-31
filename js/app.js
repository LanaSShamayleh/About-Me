'use strict';

let userName = prompt('Hey,What is your name ?');
let count = 0;
let answer;
alert('Welcome ' + userName + ' .This is My website ,Lets we play a small game before to see this page!');


// first


var q1 = prompt('Are my age is 24 years old? Your Answer must be (yes/no) or(y,n) ');

function qes(q1){

if (q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
  alert('Your Anwer is Correct');

  console.log('Your Anwer in question (1) is  Correct ');

  count++;
}
else if (q1.toLowerCase() === 'no' || q1.toLowerCase() === 'n') {
  alert('Your Anwer is not Correct');

}
else {
  alert('Your Answer must be (yes/no) or(y,n)');
}

}
qes(q1);

// second

var q2 = prompt(' What is my major? Do you think it is the communication engineer?Your Answer must be (yes/no) or(y,n) ');
function qes(q2){

if (q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y') {

  alert('Your Anwer is  Correct');

  console.log('Your Anwer in question (2) is  Correct ');
  count++;
}
else if (q2.toLowerCase() === 'no' || q2.toLowerCase() === 'n') {
  alert('Your Anwer is not Correct');
}
else {
  alert('Your Answer must be (yes/no) or(y,n) ');
}
qes(q2);


var q3 = prompt(' Do you think the winter is my season 🌨 ?Your Answer must be (yes/no) or(y,n) ');
function qes(q3){

if (q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y') {

  alert('Your Anwer is  Correct');

  console.log('Your Anwer in question (3) is  Correct , Go ahead');

  count++;
}
else if (q3.toLowerCase() === 'no' || q3.toLowerCase() === 'n') {
  alert('Your Anwer is not Correct');
}
else {
  alert('Your Answer must be (yes/no) or(y,n)  ');
}
}
qes(q3);

//next

var q4 = prompt('What is My Future Goals? Do you think to be a Web Developer? Your Answer must be (yes/no) or(y,n) ');
function qes(q4){

if (q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
  alert('Your Anwer is Correct');
  console.log('Your Anwer in question (4) is  Correct');
  count++;
}
else if (q4.toLowerCase() === 'no' || q4.toLowerCase() === 'n') {

  alert('Your Anwer is not Correct ');
} else {
  alert('Your Answer must be (yes/no) or(y,n) ');
}
qes(q4);


//next

var q5 = prompt('Do You think that a writing is one of my hobbies? Your Answer must be (yes/no) or(y,n) ');

if (q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y') {

  alert('Your Anwer is Correct');

  console.log('Your Anwer in question (5) is  Correct ');

  count++;
}
else if (q5.toLowerCase() === 'no' || q5.toLowerCase() === 'n') {

  alert('Your Anwer is not Correct ');

} else {

  alert('Your Answer must be (yes/no) or(y,n) ');

}

//next

var array = ['try to guess my lucky number ( 1 and 10 )', 'If i would to change one my hobbies, which one would i change it?'];
let n;
var k = 0;
for (n = 0; n < 4; n++) {

  answer = prompt('Hey' + userName + '! this is the last question,so ' + array[0] + '.Note you have only ' + (4 - n) + 'attempts! ');
  switch (answer) {
  case '1':
  case '2':
  case '3':
  case '4':

    alert('lessly close to reach !');
    break;

  case '5':
  case '9':
  case '10':

    alert('highly close to reach!');
    break;

  case '6':
  case '8':

    alert('hmmmmm try to pick very very closely');

    break;

  case '7':
    count++;

    console.log('Your Anwer in question (6) is  Correct ');

    n = 5;
    break;
  default:
    alert('Please pick a number from the range ( 1 to 10 ) only');

  }
}

next

  var q7Ans;
  var levels = ['code101', 'code102', 'code201', 'code301'];
  var correct = false;
  var k = 0;
  while (k < 6) {
    //console.log(k, 'attempt');
    q7Ans = prompt('What are the Levels that I took in the Web Development Course ,you have 6 attempts to guess the correct answer\n Hint: The answer include the name of code ');
    for (var j = 0; j < levels.length; j++) {
      if (q7Ans.toLowerCase() === levels[j]) {
        alert(` Very Good. This is a Correct Answer,See all correct answers about my levels \n ('  ${levels} ') .`);
        //console.log('Your Anwer in question (7) is  Correct, we finished ');
        correct = true;
        count++;
        break;
      }
    }if (correct)
      break;
    alert('Wrong Answer, ' + (5 - k) + ' Attempt remain');
    k++;
  }if (!correct)
    alert(`you didn't guess,the correct answer its any one code of this list\n (' ${levels} ') ,hope see you again `);


// var levels = ['code101', 'code102', 'code201', 'code301'];

// // console.log(k, 'attempt');
// var q7Ans;
// var correct = false;


// let k 
// while (k < 6) {
//   q7Ans = prompt('What are the Levels that I took in the Web Development Course ,you have 6 attempts to guess the correct answer\n Hint: The answer include the name of code 🙄 ');

//   for (var j = 0; j < levels.length; j++) {


//     if (q7Ans.toLowerCase() === levels[j]) {

//       alert(` Very Good. This is a Correct Answer,See all correct answers about my levels \n ('  ${levels} ') .`);
//       // console.log('Your Anwer in question (7) is  Correct, we finished ');
//       correct = true;
//       count++;
//       break;
//     }

//     if (correct) {
//       alert('Wrong Answer, ' + (5 - k) + ' Attempt remain');
//       k++;
//       // break;
//     }
    
//   if (!correct) {
//     alert(`you didn't guess,the correct answer its any one code of this list\n (' ${levels} ') ,hope see you again `);
//   }

  

// if (count < 4) {
//   alert(`Thanks ${userName} for play with us , You was a great person and  you got ${count}/7 hope see you again `);
// }
// else { 
//   alert(`Thanks${userName} for play with us , You was a great person and you got ${count}/7, Congrats `);
// }
//   }


// }
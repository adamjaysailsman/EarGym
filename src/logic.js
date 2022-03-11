let test;
// let questions = [];
// let answers = [];
// let questionIndex = 0;
// let correctAnswers = 0;
// let questionCount = 10;

// const playInterval = (id) => {
//   document.getElementById(id).play();
// };

// const hide = (id) => {
//   document.getElementById(id).style.display = 'none';
// };

// const show = (id, value) => {
//   let element = document.getElementById(id);
//   element.style.display = '';
//   if (value !== undefined) {
//     element.innerHTML = value;
//   }
// };

// const getRandomInteger = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

// const getRandomIndex = () => {
//   return getRandomInteger(0, 10);
// };

// const getRandomInterval = () => {
//   let interval = getRandomInteger(0, 5);
//   return getInterval(interval);
// };

// let getInterval = function (id) {
//   id = id + '';
//   let interval = {
//     code: 'third',
//     name: 'Major Third',
//   };
//   switch (id) {
//     case '0':
//       interval = {
//         code: 'third',
//         name: 'Major Third',
//       };
//       break;
//     case '1':
//       interval = {
//         code: 'minorthird',
//         name: 'Minor Third',
//       };
//       break;
//     case '2':
//       interval = {
//         code: 'fourth',
//         name: 'Perfect Fourth',
//       };
//       break;
//     case '3':
//       interval = {
//         code: 'fifth',
//         name: 'Perfect Fifth',
//       };
//       break;
//     case '4':
//       interval = {
//         code: 'octave',
//         name: 'Octave',
//       };
//       break;
//     default:
//     // Return whatever was set as the default
//   }

//   return interval;
// };

// let generateTest = function () {
//   show('questionArea');
//   hide('startButton');
//   show('message', '&nbsp');
//   questions = [];
//   answers = [];
//   questionIndex = 0;
//   correctAnswers = 0;

//   for (let question = 0; question < questionCount; question++) {
//     let interval = getRandomInterval();
//     questions[question] = interval.code + getRandomIndex();
//     answers[question] = interval;
//   }

//   nextQuestion();
// };

// let nextQuestion = function () {
//   show(
//     'questionIndex',
//     'Question ' + (questionIndex + 1) + ' of ' + questionCount
//   );
//   playInterval(questions[questionIndex]);
// };

// let confirmAnswer = function () {
//   evaluateAnswer();
//   questionIndex++;
//   if (questionIndex < questionCount) {
//     nextQuestion();
//   } else {
//     finishGame();
//   }
// };

// let evaluateAnswer = function () {
//   let id = document.getElementById('answer').value;
//   let interval = getInterval(id);
//   if (interval.code === answers[questionIndex].code) {
//     correctAnswers++;
//     show('message', '&nbsp');
//   } else {
//     show(
//       'message',
//       'Wrong, the correct answer was: ' + answers[questionIndex].name
//     );
//   }
// };

// let finishGame = function () {
//   show('startButton');
//   hide('questionArea');
// };

import cmajor from './chords/Majors/Major0.mp3';
import dmajor from './chords/Majors/Major1.mp3';
import emajor from './chords/Majors/Major2.mp3';
import fmajor from './chords/Majors/Major3.mp3';
import gmajor from './chords/Majors/Major4.mp3';
import amajor from './chords/Majors/Major5.mp3';

import cminor from './chords/Minors/Minor0.mp3';
import dminor from './chords/Minors/Minor1.mp3';
import eminor from './chords/Minors/Minor2.mp3';
import fminor from './chords/Minors/Minor3.mp3';
import gminor from './chords/Minors/Minor4.mp3';
import aminor from './chords/Minors/Minor5.mp3';

import cdiminished from './chords/Diminished/Diminished0.mp3';
import ddiminished from './chords/Diminished/Diminished1.mp3';
import ediminished from './chords/Diminished/Diminished2.mp3';
import fdiminished from './chords/Diminished/Diminished3.mp3';
import gdiminished from './chords/Diminished/Diminished4.mp3';
import adiminished from './chords/Diminished/Diminished5.mp3';

import caugmented from './chords/Augmented/Augmented0.mp3';
import daugmented from './chords/Augmented/Augmented1.mp3';
import eaugmented from './chords/Augmented/Augmented2.mp3';
import faugmented from './chords/Augmented/Augmented3.mp3';
import gaugmented from './chords/Augmented/Augmented4.mp3';
import aaugmented from './chords/Augmented/Augmented5.mp3';

const playlist = [
  cmajor,
  dmajor,
  emajor,
  fmajor,
  gmajor,
  amajor,
  cminor,
  dminor,
  eminor,
  fminor,
  gminor,
  aminor,
  cdiminished,
  ddiminished,
  ediminished,
  fdiminished,
  gdiminished,
  adiminished,
  caugmented,
  daugmented,
  eaugmented,
  faugmented,
  gaugmented,
  aaugmented,
];

const audio = new Audio();

// let randIndex = function (arr) {
//   return Math.floor(Math.random() * arr.length);
// };

export const play = (id) => {
  document.getElementById(id);
  audio.volume = 0.5;
  audio.play();
};
// const playChord = function (id) {
//   let audio = document.getElementById(id);
//   audio.play();
// };

let questions = [];
let answers = [];
let questionIndex = 0;
let correctAnswers = 0;
let questionCount = 10;

const hide = (id) => {
  document.getElementById(id).style.display = 'none';
};

const show = (id, value) => {
  let element = document.getElementById(id);
  element.target = '';
  if (value !== undefined) {
    element.innerHTML = value;
  }
};

let getChord = function (id) {
  id = id + '';
  let chord = {
    code: 'major',
    name: 'Major',
  };
  switch (id) {
    case '0':
      chord = {
        code: 'major',
        name: 'Major ',
      };
      break;
    case '1':
      chord = {
        code: 'minor',
        name: 'Minor',
      };
      break;
    case '2':
      chord = {
        code: 'diminished',
        name: 'Diminished ',
      };
      break;
    case '3':
      chord = {
        code: 'augmented',
        name: 'Augmented',
      };
      break;

    default:
  }
  return chord;
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let getRandomIndex = function () {
  return getRandomInteger(0, 10);
};

const getRandomChord = () => {
  let chord = getRandomInteger(0, 6);
  return getChord(chord);
};

export const generateTest = function () {
  show('questionArea');
  hide('startButton');
  show('message', '&nbsp');
  questions = [];
  answers = [];
  questionIndex = 0;
  correctAnswers = 0;

  for (let question = 0; question < questionCount; question++) {
    let chord = getRandomChord(); //needs an id paramater
    questions[question] = chord.code + getRandomIndex();
    answers[question] = chord;
  }

  nextQuestion();
};

let nextQuestion = function () {
  show(
    'questionIndex',
    'Question ' + (questionIndex + 1) + ' of ' + questionCount
  );
  play(questions[questionIndex]);
};

export const replayChord = function () {
  play(questions[questionIndex]);
};

export const confirmAnswer = function () {
  evaluateAnswer();
  questionIndex++;
  if (questionIndex < questionCount) {
    nextQuestion();
  } else {
    finishGame();
  }
};

export const evaluateAnswer = function () {
  let id = document.getElementById('answer').value;
  let chord = getChord(id);
  if (chord.code === answers[questionIndex].code) {
    correctAnswers++;
    show('message', '&nbsp');
  } else {
    show(
      'message',
      'Not quite. The correct answer was ' + answers[questionIndex].name
    );
  }
};

let finishGame = function () {
  show('startButton');
  hide('questionArea');

  if (correctAnswers === 10) {
    show(
      'message',

      'Perfect! You got ' +
        correctAnswers +
        ' out of ' +
        questionCount +
        ' correct!'
    );
  } else if (correctAnswers < 10) {
    show(
      'message',

      'You got ' +
        correctAnswers +
        ' out of ' +
        questionCount +
        ' correct. Practice makes perfect!'
    );
  }
};

import major0 from './chords/Majors/major0.mp3';
import major1 from './chords/Majors/major1.mp3';
import major2 from './chords/Majors/major2.mp3';
import major3 from './chords/Majors/major3.mp3';
import major4 from './chords/Majors/major4.mp3';
import major5 from './chords/Majors/major5.mp3';

import minor0 from './chords/Minors/minor0.mp3';
import minor1 from './chords/Minors/minor1.mp3';
import minor2 from './chords/Minors/minor2.mp3';
import minor3 from './chords/Minors/minor3.mp3';
import minor4 from './chords/Minors/minor4.mp3';
import minor5 from './chords/Minors/minor5.mp3';

import diminished0 from './chords/Diminished/diminished0.mp3';
import diminished1 from './chords/Diminished/diminished1.mp3';
import diminished2 from './chords/Diminished/diminished2.mp3';
import diminished3 from './chords/Diminished/diminished3.mp3';
import diminished4 from './chords/Diminished/diminished4.mp3';
import diminished5 from './chords/Diminished/diminished5.mp3';

import augmented0 from './chords/Augmented/augmented0.mp3';
import augmented1 from './chords/Augmented/augmented1.mp3';
import augmented2 from './chords/Augmented/augmented2.mp3';
import augmented3 from './chords/Augmented/augmented3.mp3';
import augmented4 from './chords/Augmented/augmented4.mp3';
import augmented5 from './chords/Augmented/augmented5.mp3';

import majorseventh0 from './chords/Major-Sevenths/majorseventh0.mp3';
import majorseventh1 from './chords/Major-Sevenths/majorseventh1.mp3';
import majorseventh2 from './chords/Major-Sevenths/majorseventh2.mp3';
import majorseventh3 from './chords/Major-Sevenths/majorseventh3.mp3';
import majorseventh4 from './chords/Major-Sevenths/majorseventh4.mp3';
import majorseventh5 from './chords/Major-Sevenths/majorseventh5.mp3';

const playlist = [
  major0,
  major1,
  major2,
  major3,
  major4,
  major5,
  minor0,
  minor1,
  minor2,
  minor3,
  minor4,
  minor5,
  diminished0,
  diminished1,
  diminished2,
  diminished3,
  diminished4,
  diminished5,
  augmented0,
  augmented1,
  augmented2,
  augmented3,
  augmented4,
  augmented5,
  majorseventh0,
  majorseventh1,
  majorseventh2,
  majorseventh3,
  majorseventh4,
  majorseventh5,
];

let questions = [];
let answers = [];
let questionIndex = 0;
let correctAnswers = 0;
let questionCount = 10;

export const playChord = function (id) {
  document.getElementById(id).play();
};

const hide = (id) => {
  document.getElementById(id).style.display = 'none';
};

const show = (id, value) => {
  let element = document.getElementById(id);
  element.style.display = '';
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
    case '4':
      chord = {
        code: 'majorseventh',
        name: 'Major-Seventh',
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
  return getRandomInteger(0, 5);
};

const getRandomChord = () => {
  let chord = getRandomInteger(0, 5); //if adding more chords, increase this by one
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

  for (let idx = 0; idx < questionCount; idx++) {
    let chord = getRandomChord(); // major
    questions[idx] = chord.code + getRandomIndex(); // major + 0
    answers[idx] = chord;
    console.log(questions);
  }
  nextQuestion();
};

let nextQuestion = async function () {
  show(
    'questionIndex',
    'Question ' + (questionIndex + 1) + ' of ' + questionCount
  );

  for (let i = 0; i < playlist.length; i++) {
    let lowercasePlaylist = playlist[i].toLowerCase();

    if (lowercasePlaylist.indexOf(questions[questionIndex]) !== -1) {
      const currentSound = new Audio(lowercasePlaylist);
      currentSound.volume = 0.5;
      currentSound.play();
    }
  }
};

export const replayChord = function () {
  // const replay = new Audio(questions[questionIndex]);
  // replay.play();
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

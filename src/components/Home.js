import React from 'react';
import logo from './logo.svg';
import css from '../App.css';
import { play, generateTest, replayChord, confirmAnswer } from '../logic.js';

const Home = () => {
  // const audio = new Audio();
  // const playlist = [sound];

  // let randIndex = function (arr) {
  //   return Math.floor(Math.random() * arr.length);
  // };

  // const play = () => {
  //   audio.src = playlist[randIndex(playlist)];
  //   audio.volume = 0.5;
  //   audio.play();
  // };

  return (
    <div id="container">
      <h1>EAR GYM</h1>
      <h4>An ear training application</h4>
      <button id="startButton" className="button" onClick={generateTest}>
        Start Test
      </button>

      <div id="questionArea">
        <button className="button" onClick={replayChord}>
          Replay Chord
        </button>

        <select id="answer">
          <option value="0">Major</option>
          <option value="1">Minor</option>
          <option value="2">Diminished</option>
          <option value="3">Augmented</option>
        </select>
        <button className="button" onClick={confirmAnswer}>
          Confirm Answer
        </button>
        <h3 id="questionIndex"></h3>
      </div>

      <div id="message"></div>
      <audio id="major0" src="../chords/Majors/Major1.mp3"></audio>
      <audio id="major1" src="../chords/Majors/Major1.mp3"></audio>
      <audio id="major2" src="../chords/Majors/Major2.mp3"></audio>
      <audio id="major3" src="../chords/Majors/Major3.mp3"></audio>
      <audio id="major4" src="../chords/Majors/Major4.mp3"></audio>
      <audio id="major5" src="../chords/Majors/Major5.mp3"></audio>

      <audio id="minor0" src="../chords/Minors/Minor0.mp3"></audio>
      <audio id="minor1" src="../chords/Minors/Minor1.mp3"></audio>
      <audio id="minor2" src="../chords/Minors/Minor2.mp3"></audio>
      <audio id="minor3" src="../chords/Minors/Minor3.mp3"></audio>
      <audio id="minor4" src="../chords/Minors/Minor4.mp3"></audio>
      <audio id="minor5" src="../chords/Minors/Minor5.mp3"></audio>

      <audio
        id="diminished0"
        src="../chords/Diminished/C Diminished.mp3"
      ></audio>
      <audio
        id="diminished1"
        src="../chords/Diminished/D Diminished.mp3"
      ></audio>
      <audio
        id="diminished2"
        src="../chords/Diminished/E Diminished.mp3"
      ></audio>
      <audio
        id="diminished3"
        src="../chords/Diminished/F Diminished.mp3"
      ></audio>
      <audio
        id="diminished4"
        src="../chords/Diminished/G Diminished.mp3"
      ></audio>
      <audio
        id="diminished5"
        src="../chords/Diminished/A Diminished.mp3"
      ></audio>

      <audio id="augmented0" src="../chords/Augmented/C Augmented.mp3"></audio>
      <audio id="augmented1" src="../chords/Augmented/D Augmented.mp3"></audio>
      <audio id="augmented2" src="../chords/Augmented/E Augmented.mp3"></audio>
      <audio id="augmented3" src="../chords/Augmented/F Augmented.mp3"></audio>
      <audio id="augmented4" src="../chords/Augmented/G Augmented.mp3"></audio>
      <audio id="augmented5" src="../chords/Augmented/A Augmented.mp3"></audio>
    </div>
  );
};

export default Home;

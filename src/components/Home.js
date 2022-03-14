import React from 'react';
import logo from './logo.svg';
import css from '../App.css';
import {
  playChord,
  generateTest,
  replayChord,
  confirmAnswer,
} from '../logic.js';

const Home = () => {
  return (
    <div id="container">
      <h1>EAR GYM</h1>
      <h4>The key to a good ear</h4>
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
      <audio
        id="major0"
        onPlay={playChord}
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Majors/Major1.mp3"
      ></audio>
      <audio
        id="major1"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Majors/Major1.mp3"
      ></audio>
      <audio
        id="major2"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Majors/Major2.mp3"
      ></audio>
      <audio
        id="major3"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Majors/Major3.mp3"
      ></audio>
      <audio
        id="major4"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Majors/Major4.mp3"
      ></audio>
      <audio
        id="major5"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Majors/Major5.mp3"
      ></audio>

      <audio
        id="minor0"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Minors/Minor0.mp3"
      ></audio>
      <audio
        id="minor1"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Minors/Minor1.mp3"
      ></audio>
      <audio
        id="minor2"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Minors/Minor2.mp3"
      ></audio>
      <audio
        id="minor3"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Minors/Minor3.mp3"
      ></audio>
      <audio
        id="minor4"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Minors/Minor4.mp3"
      ></audio>
      <audio
        id="minor5"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Minors/Minor5.mp3"
      ></audio>

      <audio
        id="diminished0"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Diminished/C Diminished.mp3"
      ></audio>
      <audio
        id="diminished1"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Diminished/D Diminished.mp3"
      ></audio>
      <audio
        id="diminished2"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Diminished/E Diminished.mp3"
      ></audio>
      <audio
        id="diminished3"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Diminished/F Diminished.mp3"
      ></audio>
      <audio
        id="diminished4"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Diminished/G Diminished.mp3"
      ></audio>
      <audio
        id="diminished5"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Diminished/A Diminished.mp3"
      ></audio>

      <audio
        id="augmented0"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Augmented/C Augmented.mp3"
      ></audio>
      <audio
        id="augmented1"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Augmented/D Augmented.mp3"
      ></audio>
      <audio
        id="augmented2"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Augmented/E Augmented.mp3"
      ></audio>
      <audio
        id="augmented3"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Augmented/F Augmented.mp3"
      ></audio>
      <audio
        id="augmented4"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Augmented/G Augmented.mp3"
      ></audio>
      <audio
        id="augmented5"
        style={{ display: 'none' }}
        preload="true"
        src="../chords/Augmented/A Augmented.mp3"
      ></audio>
    </div>
  );
};

export default Home;

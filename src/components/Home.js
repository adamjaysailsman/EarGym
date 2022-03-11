import React from 'react';
import logo from './logo.svg';
import css from '../App.css';
import { Link } from 'react-router-dom';
// import { playChord } from '../logic.js';

const Home = () => {
  return (
    <div id="container">
      <h1>EAR GYM</h1>
      <h4>An ear training application</h4>
      <button id="startButton" className="button">
        Start Test
      </button>
      <div id="questionArea">
        <button className="button">Replay Chord</button>

        <select id="answer">
          <option value="0">Major</option>
          <option value="1">Minor</option>
          <option value="2">Diminished</option>
          <option value="3">Augmented</option>
        </select>
        <button className="button">Confirm Answer</button>
      </div>
      <div id="message"></div>
      <audio id="c-major" src="../chords/Majors/C Major.mp3"></audio>
      <audio id="d-major" src="../chords/Majors/D Major.mp3"></audio>
      <audio id="e-major" src="../chords/Majors/E Major.mp3"></audio>
      <audio id="f-major" src="../chords/Majors/F Major.mp3"></audio>
      <audio id="g-major" src="../chords/Majors/G Major.mp3"></audio>
      <audio id="a-major" src="../chords/Majors/A Major.mp3"></audio>

      <audio id="c-minor" src="../chords/Minors/C Minor.mp3"></audio>
      <audio id="d-minor" src="../chords/Minors/D Minor.mp3"></audio>
      <audio id="e-minor" src="../chords/Minors/E Minor.mp3"></audio>
      <audio id="f-minor" src="../chords/Minors/F Minor.mp3"></audio>
      <audio id="g-minor" src="../chords/Minors/G Minor.mp3"></audio>
      <audio id="a-minor" src="../chords/Minors/A Minor.mp3"></audio>

      <audio
        id="c-diminished"
        src="../chords/Diminished/C Diminished.mp3"
      ></audio>
      <audio
        id="d-diminished"
        src="../chords/Diminished/D Diminished.mp3"
      ></audio>
      <audio
        id="e-diminished"
        src="../chords/Diminished/E Diminished.mp3"
      ></audio>
      <audio
        id="f-diminished"
        src="../chords/Diminished/F Diminished.mp3"
      ></audio>
      <audio
        id="g-diminished"
        src="../chords/Diminished/G Diminished.mp3"
      ></audio>
      <audio
        id="a-diminished"
        src="../chords/Diminished/A Diminished.mp3"
      ></audio>

      <audio id="c-augmented" src="../chords/Augmented/C Augmented.mp3"></audio>
      <audio id="d-augmented" src="../chords/Augmented/D Augmented.mp3"></audio>
      <audio id="e-augmented" src="../chords/Augmented/E Augmented.mp3"></audio>
      <audio id="f-augmented" src="../chords/Augmented/F Augmented.mp3"></audio>
      <audio id="g-augmented" src="../chords/Augmented/G Augmented.mp3"></audio>
      <audio id="a-augmented" src="../chords/Augmented/A Augmented.mp3"></audio>
    </div>
  );
};

export default Home;

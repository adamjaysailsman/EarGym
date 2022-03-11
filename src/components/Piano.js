import React from 'react';

const Piano = () => {
  return (
    <div>
      <ul id="keyboard">
        <li note="C" className="white">
          A
        </li>
        <li note="C#" className="black">
          W
        </li>
        <li note="D" className="white offset">
          S
        </li>
        <li note="D#" className="black">
          E
        </li>
        <li note="E" className="white offset">
          D
        </li>
        <li note="F" className="white">
          F
        </li>
        <li note="F#" className="black">
          T
        </li>
        <li note="G" className="white offset">
          G
        </li>
        <li note="G#" className="black">
          Y
        </li>
        <li note="A" className="white offset">
          H
        </li>
        <li note="A#" className="black">
          U
        </li>
        <li note="B" className="white offset">
          J
        </li>
        <li note="C2" className="white">
          K
        </li>
        <li note="C#2" className="black">
          O
        </li>
        <li note="D2" className="white offset">
          L
        </li>
        <li note="D#2" className="black">
          P
        </li>
        <li note="E2" className="white offset">
          ;
        </li>
      </ul>
    </div>
  );
};

export default Piano;

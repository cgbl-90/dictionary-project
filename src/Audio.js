import React from "react";
import "./App.css";

/* 
   Audio: https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3
*/

export default function Audio(value) {
  let word = value.value;
  const call = `https://media.merriam-webster.com/audio/prons/en/us/wav/${word.charAt()}/${word}.wav`;

  return (
    <a href={call} target="_blank" rel="noopener noreferrer">
      <span className="material-symbols-outlined btn">music_note</span>
    </a>
  );
}

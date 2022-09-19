import React from "react";
import "./App.css";

export default function PrintDefinition(definition) {
  /* 
    Json: https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=28e2d780-8e37-4805-a70e-8a22e8bc93b9 
    Audio: https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3
*/

  if (definition.typeof === undefined) return " ";
  else
    return (
      <section>
        <h1>.part of speech.</h1>
        <h3>{definition.data.fl}</h3>
      </section>
    );
}

/* 
        <h1>.definition.</h1>
        <h3>{definition.shortdef}</h3>
        <h1>.related terms.</h1>
       <h3>{definition.meta.stems}</h3>
        {definition.offensive === true ? (
          <h1>this term is considered offensive</h1>
        ) : (
          " "
        )}
        <h1>.pronunciations.</h1>
        <h3>
          {definition.prs.sound.audio !== undefined ? (
            <h1>this term is considered offensive</h1>
          ) : (
            "The audio is not available"
          )}
        </h3> 
        
        */

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [keyword, setKeyword] = useState(String);
  const [definition, setDefinition] = useState({});
  const apiKey = `28e2d780-8e37-4805-a70e-8a22e8bc93b9`;
  const call = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
  /* 
    Json: https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=28e2d780-8e37-4805-a70e-8a22e8bc93b9 
    Audio: https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pajama02.mp3
  
    console.log(
      `media.merriam-webster.com/audio/prons/en/us/mp3/p/${props.data[0].hwi.prs[0].sound.audio}.mp3`
    );
  
  */
  function handleResponse(props) {
    setDefinition({
      type: props.data[0].fl,
      short: props.data[0].shortdef,
      audio: props.data[0].hwi.prs[0].sound.audio,
      related: props.data[0].meta.stems,
      isOffensive: props.data[0].meta.offensive,
    });
  }

  function SearchKeyword(event) {
    event.preventDefault();
    axios.get(call).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <h1>.word.</h1>
      <form className="btn-group" onSubmit={SearchKeyword}>
        <input type="search" onChange={updateKeyword} />
        <button className="btn">search</button>
      </form>
      <section className="description">
        <h1>.definition.</h1>
        <h6>{definition.short}</h6>
        {definition.isOffensive === true ? (
          <h1>this term is considered offensive</h1>
        ) : (
          " "
        )}
      </section>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import PrintDefinition from "./PrintDefinition";

export default function Search() {
  const [keyword, setKeyword] = useState(String);
  const [definition, setDefinition] = useState({});
  const apiKey = `28e2d780-8e37-4805-a70e-8a22e8bc93b9`;
  const call = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;

  function handleResponse(props) {
    console.log(props.data[0]);
    setDefinition(props.data[0]);
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
      {definition !== undefined ? (
        <PrintDefinition definition={definition} />
      ) : (
        " "
      )}
    </div>
  );
}

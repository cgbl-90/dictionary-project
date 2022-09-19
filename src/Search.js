import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Description from "./Description";

/*
    Json: https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=28e2d780-8e37-4805-a70e-8a22e8bc93b9 
*/

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);
  const apiKey = `28e2d780-8e37-4805-a70e-8a22e8bc93b9`;
  const call = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;

  function handleResponse(props) {
    setDefinition(props.data);
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
        <Description description={definition} />
      </section>
    </div>
  );
}

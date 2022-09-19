import React, { useState } from "react";
import "./App.css";

export default function Search() {
  const [keyword, setKeyword] = useState(String);

  function SearchKeyword(event) {
    event.preventDefault();
    alert("Searching for word " + keyword);
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
    </div>
  );
}

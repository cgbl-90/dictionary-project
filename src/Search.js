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
  let [photos, setPhotos] = useState(null);
  const apiKey = `28e2d780-8e37-4805-a70e-8a22e8bc93b9`;
  const call = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
  const pexelsKey = "563492ad6f91700001000001f20ea2971b8b4acf94ca44aa20ac0324";
  const pexelsCall = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;

  function searchPictures() {
    axios
      .get(pexelsCall, {
        headers: { authorization: `Bearer ${pexelsKey}` },
      })
      .then((pictures) => {
        setPhotos(pictures);
      });
  }

  function SearchKeyword(event) {
    event.preventDefault();
    axios.get(call).then((props) => {
      setDefinition(props.data);
      searchPictures();
    });
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
        {definition !== null ? <Description description={definition} /> : " "}
      </section>
      <section className="album">
        {photos !== null
          ? photos.data.photos.map((pic, index) => {
              return (
                <a
                  id={index}
                  href={pic.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img class="fit-picture" src={pic.src.tiny} alt={pic.alt} />
                </a>
              );
            })
          : " "}
      </section>
    </div>
  );
}

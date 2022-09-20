import React from "react";
import "./App.css";

export default function Picture(photos) {
  photos.photos.data.photos.map((pic) => {
    console.log(pic);
    return (
      <a id={pic.id} href={pic.url} target="_blank" rel="noopener noreferrer">
        <img class="fit-picture" src={pic.src.tiny} alt={pic.alt}>
          {pic.alt}
        </img>
      </a>
    );
  });
}

import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

/* Documentation: https://www.pexels.com/api/ */

export default function Picture(value) {
  const apiKey = "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
  let keyword = value.keyword[0];
  let call = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
  const [photos, setPhotos] = useState("");

  useEffect(() => {
    axios
      .get(call, {
        headers: { authorization: `Bearer ${apiKey}` },
      })
      .then(handleResponse);
  }, [keyword]);

  function handleResponse(response) {
    setPhotos(response.data.photos);
    photos.map((pic, index) => {
      return (
        <img
          id={"img" + index}
          class="fit-picture"
          src={pic.src.small}
          alt={keyword}
        />
      );
    });
  }
}

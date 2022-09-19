import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

/* Documentation: https://www.pexels.com/api/ */

export default function Picture(value) {
  const apiKey = "563492ad6f91700001000001a0681dd72f5142d1b8e83f2e8484df85";
  let keyword = value.keyword[0];
  let call = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
  let headerApi = {
    Authorization: `Bearer ${apiKey}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
  };
  const [photos, setPhotos] = useState("");

  useEffect(() => {
    console.log(keyword);
    axios
      .get(call, {
        headers: { headerApi },
      })
      .then(handleResponse);
  }, [keyword]);

  function handleResponse(response) {
    setPhotos(response);
    console.log(photos);
    return " ";
  }
}

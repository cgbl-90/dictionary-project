import React from "react";
import "./App.css";
import Audio from "./Audio";
import Picture from "./Picture";

export default function Description(definition) {
  if (definition.description === null) return " ";
  else {
    console.log(definition);
    return (
      <div className="description">
        <br />
        <h2>
          {definition.description[0].hwi.hw} (
          {definition.description[0].hwi.prs[0].mw})
          <Audio value={definition.description[0].hwi.prs[0].sound.audio} />
        </h2>
        <br />
        <em>
          <h5>
            {definition.description[0].meta.stems.map((syns) => {
              return "~" + syns + " ";
            })}
          </h5>
        </em>
        <br />
        <Picture value={definition.description[0].meta.id} />
        <br />
        {definition.description.map((singleDefinition, a) => {
          return (
            <article>
              <h4 key={a}>
                {a + 1} {singleDefinition.fl}
              </h4>
              {singleDefinition.shortdef.map((element, b) => {
                return (
                  <h6 key={b} className="small-definitions">
                    {b + 1}. {element}
                  </h6>
                );
              })}
              <br />
            </article>
          );
        })}
        <br />
        {definition.description[0].meta.offensive === true ? (
          <h6>This word is marked as offensive</h6>
        ) : (
          ""
        )}
        <br />
      </div>
    );
  }
}

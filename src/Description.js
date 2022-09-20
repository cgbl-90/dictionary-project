import React from "react";
import "./App.css";
import Audio from "./Audio";

export default function Description(definition) {
  return (
    <article className="description">
      <br />
      {definition.description[0].meta.offensive ? (
        <h6 className="warning">This word may be offensive</h6>
      ) : (
        ""
      )}
      <br />
      <h2>
        {definition.description[0].meta.id.split(":1")} (
        {definition.description[0].hwi.hw}) (
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
      {definition.description.map((singleDefinition, a) => {
        return (
          <article>
            <h4 key={a} className="badge">
              {singleDefinition.fl}
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
    </article>
  );
}

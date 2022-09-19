import { buildQueries } from "@testing-library/react";
import React from "react";
import "./App.css";

export default function Description(definition) {
  if (definition.description === null) return " ";
  else {
    return definition.description.map(function (singleDefinition, a) {
      console.log(singleDefinition.shortdef);
      return (
        <article>
          <h4>
            {a + 1} {singleDefinition.fl}
          </h4>
          {singleDefinition.shortdef.map(function (element, b) {
            return (
              <h6 key={b}>
                {b + 1}. {element}
              </h6>
            );
          })}
        </article>
      );
    });
  }
}

import React from "react";
import Meaning from "../Meaning/Meaning";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2> {/*// returns the word searched for*/}
        {props.results.meanings.map(function (meaning, index) {
          // mapping through the meanings array of the API to return the definition(s)
          // return meaning.definitions[0].definition;
          return (
            <div key={index}>
              <Meaning meaning={meaning} />{" "}
              {/*// returns the definition(s) and sends down to meaning component*/}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;

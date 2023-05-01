import React from "react";
import Meaning from "../Meaning/Meaning";
import Synonyms from "../Synonyms/Synonyms";
import Phonetic from "../Phonetic/Phonetic";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2> {/*// returns the word searched for*/}
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          // mapping through the meanings array of the API to return the definition(s) as some words have multiple defineitions within meanings
          // return meaning.definitions[0].definition;
          return (
            <section key={index}>
              {" "}
              {/*// key is required for mapping*/}
              <Meaning meaning={meaning} />{" "}
              {/*// returns the definition(s) and sends down to meaning component*/}
              <Synonyms synonyms={meaning.synonyms} />{" "}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;

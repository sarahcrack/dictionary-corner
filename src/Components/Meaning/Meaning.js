import React from "react";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* // map through the definitions array of the API to return the definition(s) - some words can have multiple definitions */}
      {props.meaning.definitions.map(function (definition, index) { 
        return (
          <div key={index}> {/* // unique key is required for mapping */}
            <p> 
              {definition.definition} 
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;



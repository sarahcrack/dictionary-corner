import React from "react";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definitions[0].definiton}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  );
}

export default Meaning;

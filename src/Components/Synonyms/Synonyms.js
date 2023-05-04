import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    // if props.synonyms is defined and has at least one item
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;

/*
This updated code checks that props.synonyms is both defined and has at least one item before rendering the <ul> element with the "Synonyms" title and the list of synonyms. 
If props.synonyms is not defined or is an empty array, the component returns null and does not render anything.
*/

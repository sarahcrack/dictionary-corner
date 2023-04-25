import React, { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null); // we know results will change so need to use useState

  function handleResponse(response) {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]); // setResults is a function that updates the state of results - everytime we get a reault from the API we update the state of results
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  // documentation: https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}

export default Dictionary;

import React, { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";
import "./Dictionary.css";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null); // we know results will change so need to use useState
  const [loaded, setLoaded] = useState(false); // to track if the page has loaded or not (we want to set a default keyword on page load)

  function handleResponse(response) {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]); // setResults is a function that updates the state of results - everytime we get a reault from the API we update the state of results
  }

  // documentation: https://dictionaryapi.dev/
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  // function getRandomWord() {
  //   let apiUrl = "https://random-word-api.herokuapp.com/word";
  //   axios.get(apiUrl).then(handleResponse);
  // }

  // function getWord(word) {
  //   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
  //   axios.get(apiUrl).then(handleResponse);
  // }

  function getRandomWord() {
    let apiUrl = "https://random-word-api.herokuapp.com/word";
    axios.get(apiUrl).then((response) => {
      let randomWord = response.data[0];
      let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${randomWord}`;
      axios.get(dictionaryApiUrl).then(handleResponse);
    });
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, home...
          </div>
          <button
            type="button"
            class="btn btn-outline-secondary"
            aria-label="Lucky Dip"
            title="Surprise me!"
            onClick={() => getRandomWord()}
          >
            Lucky Dip
          </button>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;

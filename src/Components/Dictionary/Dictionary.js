import React, { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";
import "./Dictionary.css";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null); // we know results will change so need to use useState
  const [loaded, setLoaded] = useState(false); // to track if the page has loaded or not (we want to set a default keyword on page load)

  // this function will handle the response from the API
  function handleResponse(response) {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]); // setResults is a function that updates the state of results - everytime we get a reault from the API we update the state of results
  }

  // documentation: https://dictionaryapi.dev/
  // this function will search the dictionary api for the keyword
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  // this function will be called when the user submits the search form
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  // this function will update the state of keyword everytime the user types in the search box
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  // this function will get a random word from the random-word-api and then use that word to search the dictionary api
  function getRandomWord() {
    let apiUrl = "https://random-word-api.herokuapp.com/word";
    axios.get(apiUrl).then((response) => {
      let randomWord = response.data[0];
      let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${randomWord}`;
      axios.get(dictionaryApiUrl).then(handleResponse);
    });
  }

  // this function will load the page and set the default keyword
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
              placeholder="What word would you like to look up? 🔍"
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

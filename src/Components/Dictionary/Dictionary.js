import React, { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";
import Photos from "../Photos/Photos";
import "./Dictionary.css";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null); // we know results will change so need to use useState
  const [loaded, setLoaded] = useState(false); // to track if the page has loaded or not (we want to set a default keyword on page load)
  const [photos, setPhotos] = useState(null);

  // this function will handle the response from the API
  function handleResponse(response) {
    // console.log(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]); // setResults is a function that updates the state of results - everytime we get a reault from the API we update the state of results
  }

  function handleSheCodesResponse(response) {
    // console.log(response);
    setPhotos(response.data.photos);
  }

  // documentation: https://dictionaryapi.dev/
  // this function will search the dictionary api for the keyword
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    // const pexelsApiKey =
    //   "Ldl7vvdW7ZF59f3fRm5rq5Jc9Z20hZNYiwIiZfaosM1d1etYHZVK7Y7F";
    // let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    // let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    // axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    let sheCodesApiKey = "0f0e3e77b0eaata6o0ebb284b5b47f5a";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
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


// this function will get a random word from the random word API
  function getRandomWord() {
    let apiUrl = "https://random-word-api.herokuapp.com/word"; // this is the API we are using to get a random word
    axios.get(apiUrl).then((response) => { // this is the response from the API
      let randomWord = response.data[0]; // this is the random word we get from the API
      let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${randomWord}`; // this is the API we are using to get the definition of the random word
      axios
        .get(dictionaryApiUrl) // this is the response from the API
        .then((response) => { 
          let wordData = response.data[0]; // this is the data we get from the API (the definition of the random word)
          setResults(wordData); // setResults is a function that updates the state of results - everytime we get a reault from the API we update the state of results
          let sheCodesApiKey = "0f0e3e77b0eaata6o0ebb284b5b47f5a";
          let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${randomWord}&key=${sheCodesApiKey}`; // this is the API we are using to get the photos of the random word
          axios.get(sheCodesApiUrl).then(handleSheCodesResponse); // this is the response from the API (the photos of the random word)
        })
        .catch(() => { // if the word is not found in the dictionary API then we will call getRandomWord again to get another random word
          getRandomWord(); // Call getRandomWord again if the word is not found
        });
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
            className="btn btn-outline-secondary"
            aria-label="Lucky Dip"
            title="Surprise me!"
            onClick={() => getRandomWord()}
          >
            Lucky Dip
          </button>
        </section>
        <Results results={results} />

        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;

import React from "react";
import "./App.css";
import Dictionary from "../Dictionary/Dictionary";
import bookshop from "../Images/bookshop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Corner 📖</header>
        <div className="Dictionary-content">
          <main>
            {" "}
            <img src={bookshop} className="Bookshop img-fluid" alt="bookshop" />
            <h2>
              Welcome
              <FontAwesomeIcon
                icon={faStar}
                fade
                style={{ color: "#e7cb13" }}
              />
            </h2>
            <h3>Here you can find all the words you need!</h3>
            <Dictionary defaultKeyword="welcome" />
          </main>
        </div>
        <footer className="App-footer">
          Coded by
          <a href="https://www.linkedin.com/in/sarah-crack"> Sarah Crack</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

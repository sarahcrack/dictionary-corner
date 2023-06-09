import { useState } from "react";
import "./App.css";
import Dictionary from "../Dictionary/Dictionary";
import bookshop from "../Images/bookshop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <button
        type="button"
        className="btn btn-outline-secondary"
        aria-label="Light/Dark Mode"
        title="Light/Dark Mode"
        onClick={toggleMode}
      >
        Light/Dark Mode
      </button>

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
          <a href="https://www.linkedin.com/in/sarah-crack"> Sarah Crack </a>
          <a
            href="https://github.com/sarahcrack"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffdab9" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/sarah-crack"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffdab9" }} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

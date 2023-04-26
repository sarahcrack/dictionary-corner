import React from "react";
import "./App.css";
import Dictionary from "../Dictionary/Dictionary";
import bookshop from "../Images/bookshop.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Corner 📚</header>
        <div className="Dictionary-content">
          <main>
            {" "}
            <h1>Welcome to Dictionary Corner</h1>
            <p>Here you can find all the words you need!</p>
            <img src={bookshop} className="Bookshop img-fluid" alt="bookshop" />
            <Dictionary />
          </main>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </div>
        <footer className="App-footer">Coded by Sarah Crack</footer>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autofocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}

export default Dictionary;

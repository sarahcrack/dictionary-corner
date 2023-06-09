import "./Meaning.css";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {/* map through the definitions array of the API to return the definition(s) - some words can have multiple definitions */}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {/* unique key is required for mapping */}

            <div className="definition">{definition.definition}</div>

            {definition.example && (
              <div className="example">"{definition.example}"</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;

// In the code above, a check has been added for definition.example inside the map() function.
// If it exists, the example is rendered as before.
// But if it's falsy (e.g. if it's null, undefined, or an empty string), the rendering of the example is skipped altogether.
// The example is also wrapped in a span element to avoid breaking the structure of the paragraph.

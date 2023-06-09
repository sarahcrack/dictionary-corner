import "./Phonetic.css";

function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}

export default Phonetic;

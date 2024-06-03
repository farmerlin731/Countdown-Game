import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const inputRef = useRef();
  function handleSubmit() {
    setPlayerName(inputRef.current.value);
    inputRef.current.value = ""; //imperative, don't advise
  }

  return (
    <section id="player">
      <h2>Welcome {playerName || "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button type="button" onClick={handleSubmit}>
          Set Name
        </button>
      </p>
    </section>
  );
}

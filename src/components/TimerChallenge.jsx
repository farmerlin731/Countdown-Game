import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// let timer; // Forbidden! It will share cross components!
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modalRef = useRef();
  const [isRunning, setIsRunning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  function handleStart() {
    setIsRunning(true);
    timer.current = setTimeout(() => {
      setIsExpired(true);
      modalRef.current.showModal();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setIsRunning(false);
  }

  return (
    <section className="challenge">
      <ResultModal ref={modalRef} targetTime={targetTime} result="lost" />
      <h2>{title}</h2>
      {isExpired && "U r lost!"}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={isRunning ? handleStop : handleStart}>
          {isRunning ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={isRunning ? "active" : undefined}>
        {isRunning ? "Time is running..." : "Timer inactive."}
      </p>
    </section>
  );
}

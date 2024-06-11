import { useRef, useState } from "react";
// let timer; // Forbidden! It will share cross components!
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [isRunning, setIsRunning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  function handleStart() {
    setIsRunning(true);
    timer.current = setTimeout(() => {
      setIsExpired(true);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setIsRunning(false);
  }

  return (
    <section className="challenge">
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
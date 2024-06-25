import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// let timer; // Forbidden! It will share cross components!
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modalRef = useRef();

  const [remainTime, setRemainTime] = useState(targetTime * 1000);
  const isRunning = remainTime > 0 && remainTime < targetTime * 1000;
  console.log(remainTime);

  if (remainTime < 0) {
    handleStop();
  }

  function handleStart() {
    //Change to timeInterval to compute score
    timer.current = setInterval(() => {
      setRemainTime((pre) => pre - 50);
    }, 50);
  }

  function handleStop() {
    clearInterval(timer.current);
    modalRef.current.open();
  }

  function handleReset() {
    setRemainTime(targetTime * 1000);
  }

  return (
    <section className="challenge">
      <ResultModal
        ref={modalRef}
        targetTime={targetTime}
        remainTime={remainTime}
        onReset={handleReset}
      />
      <h2>{title}</h2>
      {/* {isExpired && "U r lost!"} */}
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

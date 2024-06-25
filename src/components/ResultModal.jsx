import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainTime, onReset },
  ref
) {
  const dialogRef = useRef();
  const score = Math.round((1 - remainTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return (
    <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
      {remainTime <= 0 && <h2>You lost :(</h2>}
      {remainTime > 0 && <h2>You Score :{score}</h2>}
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 && "s"}.
        </strong>
      </p>
      <p>
        You stopped the timer with
        <strong> {remainTime / 1000} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

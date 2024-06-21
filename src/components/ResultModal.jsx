import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, result },
  ref
) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        the timer with <strong>x left.</strong>
      </p>
      <form action="method dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

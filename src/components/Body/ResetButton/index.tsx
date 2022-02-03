import { Dispatch } from "react";
import { DispatchAction, DispatchType } from "types";

function ResetButton({
  dispatchFunction,
}: {
  dispatchFunction: Dispatch<DispatchAction>;
}) {
  function handleClick() {
    if (window.confirm("All states of edit cards will be deleted. Reset?"))
      dispatchFunction({ type: DispatchType.RESET });
  }
  return (
    <div className="mt-2 ml-28">
      <button
        type="button"
        className="focus:outline-none text-gray-600 text-sm py-2.5 px-5 rounded-md border border-gray-500 hover:ring-2 hover:bg-gray-50"
        onClick={handleClick}
      >
        <i className="fas fa-plus pr-2"></i>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;

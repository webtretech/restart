import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setCounter } from "../redux/reducers/app";

export default function Home() {
  // Access the dispatcher & fully-typed state from anywhere in the app using hooks
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state) => state.app);

  // Increase the counter
  const increaseCounter = useCallback(() => {
    dispatch(setCounter(counter + 1));
  }, [counter]);

  // Decrease the counter
  const decreaseCounter = useCallback(() => {
    dispatch(setCounter(counter - 1));
  }, [counter]);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title font-sans text-8xl">{counter}</h2>
            <p className="p-4 text-sm">
              An example state management using redux, check the console for
              change logs.
            </p>
            <div className="card-actions justify-end">
              <button className="btn-error btn" onClick={decreaseCounter}>
                Decrease
              </button>
              <button className="btn-success btn" onClick={increaseCounter}>
                Increase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

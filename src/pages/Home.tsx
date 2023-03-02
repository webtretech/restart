import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { counterActions } from "@/redux/counter/counterSlice";
import { useCallback } from "react";
import { Button, Card } from "react-daisyui";
import { useTranslation } from "react-i18next";

export default function Home(): JSX.Element {
  const { t } = useTranslation();

  // Access the dispatcher & fully-typed state
  // from anywhere in the app using hooks
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state) => state.counter);

  // Increase the counter
  const increaseCounter = useCallback(() => {
    const increasedCount = counter + 1;
    dispatch(counterActions.setCounter(increasedCount));
  }, [counter]);

  // Decrease the counter
  const decreaseCounter = useCallback(() => {
    const decreasedCount = counter - 1;
    dispatch(counterActions.setCounter(decreasedCount));
  }, [counter]);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Card className="w-96 bg-neutral text-neutral-content">
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2" className="font-sans text-8xl">
              {counter}
            </Card.Title>
            <p className="p-4 text-sm">
              An example state management using redux, check the console for
              action logs.
            </p>
            <Card.Actions className="justify-end">
              <Button color="error" onClick={decreaseCounter}>
                {t("decrease")}
              </Button>
              <Button color="success" onClick={increaseCounter}>
                {t("increase")}
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

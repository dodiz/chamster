import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countSelector } from "./counterSelectors";
import { counterSlice } from "./counterSlice";

export const useCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  const next = useCallback(() => {
    dispatch(counterSlice.actions.next());
  }, [dispatch]);

  const prev = useCallback(() => {
    dispatch(counterSlice.actions.prev());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(counterSlice.actions.reset());
  }, [dispatch]);

  const set = useCallback(
    (value: number) => {
      dispatch(counterSlice.actions.set(value));
    },
    [dispatch]
  );

  return {
    count,
    next,
    prev,
    reset,
    set,
  };
};

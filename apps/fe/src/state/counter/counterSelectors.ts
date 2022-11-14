import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const counterSelector = (state: RootState) => state.counter;

export const countSelector = createSelector(
  counterSelector,
  (counter) => counter.count
);

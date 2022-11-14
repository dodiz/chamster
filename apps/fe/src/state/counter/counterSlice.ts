import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    next: (c) => {
      c.count += 1;
    },
    prev: (c) => {
      c.count -= 1;
    },
    reset: (c) => {
      c.count = 0;
    },
    set: (c, args: PayloadAction<number>) => {
      c.count = args.payload;
    },
  },
});

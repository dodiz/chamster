import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";

interface IAuthSignup {
  email: string;
  password: string;
}

export const authThunks = {
  signup: createAsyncThunk<{ b: string }, IAuthSignup>(
    "signup",
    async (a, thunkAPI) => {
      return thunkAPI.rejectWithValue({});
    }
  ),
};

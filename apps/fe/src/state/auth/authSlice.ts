import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IAuthResponse } from "../../models/IAuthResponse";

interface AuthState {
  isLoggedIn: boolean;
  username: string;
  email: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: "",
  email: "",
};

interface UserSigningIn {
  email: string;
  password: string;
}

const authThunks = {
  /* signin: createAsyncThunk<IAuthResponse, UserSigningIn>(
    "signin",
    async (userSigningIn) => {
      try{
        const response = await axios.post("http://localhost:3001/");
        return { data: { token: "" }, error: "" };
      } catch (e) {

      }
    }
  ), */
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

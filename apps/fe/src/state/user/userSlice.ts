import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "@chamster/models";

interface PaginatedUsers {
  currentPage: number;
  pageSize: number;
  pages: number;
  users: User[];
}

const initialState: PaginatedUsers = {
  currentPage: 0,
  pageSize: 0,
  pages: 0,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  users: [],
};

export const loadUsers = createAsyncThunk(
  "posts/loadUsers",
  async (rejectWithValue) => {
    try {
      const { data } = await axios.get("/api/users");
      return data.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [loadUsers.pending]: (state) => {
      state.status = "loading";
    },
    [loadUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [loadUsers.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// export const {} = usersSlice.actions;
export default usersSlice.reducer;

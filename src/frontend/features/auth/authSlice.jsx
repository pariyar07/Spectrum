import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: "" || JSON.parse(localStorage.getItem("authToken")),
  user: null || JSON.parse(localStorage.getItem("authUser")),
  isLogged: false,
  status: "idle",
};

export const handleGuestLogin = createAsyncThunk(
  "auth/guestLogin",
  async (rejectWithValue) => {
    try {
      let request = await axios.post("/api/auth/login", {
        username: "satyam",
        email: "satyam@spectrum.com",
        password: "satyam@spectrum123",
      });
      return request.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isLogged = false;
      state.token = "";
      state.user = null;
    },
    editUserData: (state, action) => {
      state.user = action.payload;
    },
    follow: (state, action) => {
      state.user.following = [...state.user.following, { ...action.payload }];
    },
    unFollow: (state, action) => {
      state.user.following = [
        ...state.user.following.filter(
          (user) => user._id !== action.payload._id
        ),
      ];
    },
  },
  extraReducers: {
    [handleGuestLogin.pending]: (state) => {
      state.isLogged = false;
      state.status = "loading";
    },
    [handleGuestLogin.fulfilled]: (state, { payload }) => {
      state.isLogged = true;
      state.status = "success";
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
      localStorage.setItem("authToken", JSON.stringify(payload.encodedToken));
      localStorage.setItem("authUser", JSON.stringify(payload.foundUser));
    },
    [handleGuestLogin.rejected]: (state) => {
      state.isLogged = false;
      state.status = "failed";
    },
  },
});

export const { logoutUser, editUserData, follow, unFollow } = authSlice.actions;
export default authSlice.reducer;

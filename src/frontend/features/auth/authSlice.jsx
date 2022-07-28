import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import useToast from "frontend/custom/useToast";

const initialState = {
  token: "" || JSON.parse(localStorage.getItem("authToken")),
  user: null || JSON.parse(localStorage.getItem("authUser")),
  isLogged: false,
  status: "idle",
};

export const handleGuestLogin = createAsyncThunk(
  "auth/guestLogin",
  async (rejectWithValue) => {
    const { showToast } = useToast();
    try {
      let request = await axios.post("/api/auth/login", {
        email: "satyam@spectrum.com",
        password: "satyam@spectrum123",
      });
      return request.data;
    } catch (error) {
      console.error(error);
      showToast("Error, could not login", "error");
      return rejectWithValue(error.message);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ userEmail, userPassword }, { rejectWithValue }) => {
    const { showToast } = useToast();
    try {
      const response = await axios.post("/api/auth/login", {
        email: userEmail,
        password: userPassword,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      showToast("Error, could not login", "error");
      return rejectWithValue(error.response.data);
    }
  }
);

export const handleSignup = createAsyncThunk(
  "auth/userLogin",
  async ({ userName, userEmail, userPassword }, { rejectWithValue }) => {
    const { showToast } = useToast();
    try {
      const response = await axios.post("/api/auth/signup", {
        username: userName,
        email: userEmail,
        password: userPassword,
        firstName: "SignedUp",
        lastName: "User",
        bio: "Cowards never started and weak died on their way.",
        profileImage: "https://picsum.photos/id/1025/200/200",
        backgroundImage: "https://picsum.photos/1000/300",
        profileLink: "https://github.com/pariyar07",
      });
      return response.data;
    } catch (error) {
      console.error(error);
      showToast("Error, could not signup", "error");
      return rejectWithValue(error.response.data);
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
    [handleLogin.pending]: (state) => {
      state.isLogged = false;
      state.status = "loading";
    },
    [handleLogin.fulfilled]: (state, { payload }) => {
      state.isLogged = true;
      state.status = "success";
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
      localStorage.setItem("authToken", JSON.stringify(payload.encodedToken));
      localStorage.setItem("authUser", JSON.stringify(payload.foundUser));
    },
    [handleLogin.rejected]: (state) => {
      state.isLogged = false;
      state.status = "failed";
    },
    [handleSignup.pending]: (state) => {
      state.isLogged = false;
      state.status = "loading";
    },
    [handleSignup.fulfilled]: (state, { payload }) => {
      state.isLogged = true;
      state.status = "success";
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
      localStorage.setItem("authToken", JSON.stringify(payload.encodedToken));
      localStorage.setItem("authUser", JSON.stringify(payload.createdUser));
    },
    [handleSignup.rejected]: (state) => {
      state.isLogged = false;
      state.status = "failed";
    },
  },
});

export const { logoutUser, editUserData, follow, unFollow } = authSlice.actions;
export default authSlice.reducer;

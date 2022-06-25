import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "frontend/features/posts/postsSlice";
import usersReducer from "frontend/features/users/userSlice";
import authReducer from "frontend/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    auth: authReducer,
  }
});

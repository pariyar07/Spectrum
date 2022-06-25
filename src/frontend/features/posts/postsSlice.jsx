import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  posts: [],
  bookmarks: [],
};

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (rejectWithValue) => {
    try {
      const { data } = await axios.get("/api/posts");
      return data.posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    likePost: (state, action) => {
      const postID = action.payload;
      const postIndex = state.posts.findIndex((post) => post._id === postID);

      state.posts[postIndex].likes += 1;
    },
    unlikePost: (state, action) => {
      const postID = action.payload;
      const postIndex = state.posts.findIndex((post) => post._id === postID);

      state.posts[postIndex].likes -= 1;
    },
    bookmarkPost: (state, action) => {
      state.bookmarks = [...state.bookmarks, { ...action.payload }];
    },
    unBookmarkPost: (state, action) => {
      state.bookmarks = [
        ...state.bookmarks.filter(
          (bookmark) => bookmark._id !== action.payload._id
        ),
      ];
    },
    deletePost: (state, action) => {
      state.posts = [
        ...state.posts.filter((post) => post._id !== action.payload._id),
      ];
    },
    editPost: (state, action) => {
      state.posts = [
        ...state.posts.filter((post) => post._id !== action.payload._id),
        action.payload,
      ];
    },
    sortToTrending: (state) => {
      state.posts = [...state.posts.sort((a, b) => a.likes - b.likes)];
    },
    sortToOldest: (state) => {
      state.posts = [...state.posts].reverse();
    },
  },
  extraReducers: {
    [loadPosts.pending]: (state) => {
      state.status = "loading";
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "success";
    },
    [loadPosts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const {
  addPost,
  likePost,
  unlikePost,
  bookmarkPost,
  unBookmarkPost,
  deletePost,
  editPost,
  sortToTrending,
  sortToOldest,
} = postsSlice.actions;
export default postsSlice.reducer;

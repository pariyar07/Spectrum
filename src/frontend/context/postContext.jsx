import { useState, useEffect, createContext, useContext, useReducer} from 'react'
import {PostsReducer} from 'frontend/reducer/postsReducer';
import axios from "axios";

const PostsContext = createContext(null);

const initialState = {
    posts: [],
    bookmarks: []
}

const PostsProvider = ({children}) => {
    const [receivedPost, setReceivedPost] = useState([]);
    const [bookmarkedPost, setBookmarkedPost] = useState(false);
    const [postsState, postsDispatch] = useReducer(PostsReducer, initialState);

    const fetchPosts = async () => {
        const postsData = await axios.get("/api/posts");
        setReceivedPost(postsData.data.posts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <PostsContext.Provider value={{postsState, postsDispatch, receivedPost, bookmarkedPost, setBookmarkedPost}}>
            {children}
        </PostsContext.Provider>
    )
}

const usePosts = () => useContext(PostsContext);

export {PostsProvider, usePosts}
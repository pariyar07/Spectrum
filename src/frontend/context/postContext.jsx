import { useState, useEffect, createContext, useContext, useReducer} from 'react'
import {postsReducer} from 'frontend/reducer/postsReducer';
import axios from "axios";

const PostsContext = createContext(null);

const initialState = {
    posts: [],
    bookmarks: []
}

const PostsProvider = ({children}) => {
    const [receivedPost, setReceivedPost] = useState([]);
    const [postsState, postsDispatch] = useReducer(postsReducer, initialState);

    const fetchPosts = async () => {
        const postsData = await axios.get("/api/posts");
        setReceivedPost(postsData.data.posts);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const allPosts = [...receivedPost, ...postsState.posts]

    return (
        <PostsContext.Provider value={{postsState, postsDispatch, allPosts}}>
            {children}
        </PostsContext.Provider>
    )
}

const usePosts = () => useContext(PostsContext);

export {PostsProvider, usePosts}
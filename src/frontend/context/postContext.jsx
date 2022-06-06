import { useState, useEffect, createContext, useContext, useReducer} from 'react'
import {PostsReducer} from 'frontend/reducer/postsReducer';
import axios from "axios";

const PostsContext = createContext(null);

const initialState = {
    posts: [],
    likes: [],
    scaled: []
}

const PostsProvider = ({children}) => {
    const [receivedPost, setReceivedPost] = useState([]);
    const [postsState, postsDispatch] = useReducer(PostsReducer, initialState);

    const fetchPosts = async () => {
        const postsData = await axios.get("/api/posts");
        setReceivedPost(postsData.data.posts);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <PostsContext.Provider value={{postsState, postsDispatch, receivedPost}}>
            {children}
        </PostsContext.Provider>
    )
}

const usePosts = () => useContext(PostsContext);

export {PostsProvider, usePosts}
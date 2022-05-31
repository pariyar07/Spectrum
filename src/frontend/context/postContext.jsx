import { createContext, useContext, useReducer} from 'react'
import {PostsReducer} from 'frontend/reducer/postsReducer'

const PostsContext = createContext(null);

const initialState = {
    posts: [],
    likes: [],
    scaled: []
}

const PostsProvider = ({children}) => {
    const [postsState, postsDispatch] = useReducer(PostsReducer, initialState);

    return (
        <PostsContext.Provider value={{postsState, postsDispatch}}>
            {children}
        </PostsContext.Provider>
    )
}

const usePosts = () => useContext(PostsContext);

export {PostsProvider, usePosts}
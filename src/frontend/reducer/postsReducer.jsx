export const PostsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST": {
            const newState = {
                posts: [...state.posts, action.payload],
                bookmark: []
            }
            return newState
        }
        case "BOOKMARK_POST": {
            return {
                ...state, bookmarks: [...state.bookmarks, action.payload]
            }
        }
        case "UNBOOKMARK_POST": {
            return {
                ...state, bookmarks: state.bookmarks.filter(bookmark => bookmark._id !== action.payload._id)
            }
        }
        default: {
            return state
        }
    }
}
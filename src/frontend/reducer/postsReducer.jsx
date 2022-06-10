export const postsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST": {
            return {
                posts: [...state.posts, action.payload],
                bookmark: []
            }
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
        case "DELETE_POST": {
            return {
                ...state, posts: state.posts.filter(post => post._id !== action.payload._id)
            }
        }
        case "EDIT_POST": {
            return {
                posts: [...state.posts, action.payload]
            }
        }
        default: {
            return state
        }
    }
}
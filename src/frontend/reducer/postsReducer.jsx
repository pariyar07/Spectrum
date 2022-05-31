export const PostsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST": {
            const newState = {
                posts: [...state.posts, action.payload],
                likes: [],
                scaled: []
            }
            return newState
        }
        default: {
            return state
        }
    }
}
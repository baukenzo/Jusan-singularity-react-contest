import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = {
    id: number
    title: string
    body: string
}

type PostsState = {
    list: Post[];
}

const initialState: PostsState = {
    list: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts(state, action: PayloadAction<Post[]>) {
            state.list = action.payload
            // action.payload.forEach(item => {
            //     state.list.push(item)
            // })
        },
        addPost(state, action: PayloadAction<Post>) {
            state.list.push(action.payload)
        }, 
        removePost(state, action: PayloadAction<number>) {
            state.list = state.list.filter(post => post.id !== action.payload)
        }
    }
})

export const {fetchPosts, addPost, removePost} = postsSlice.actions;

export default postsSlice.reducer;
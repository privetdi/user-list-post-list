import { createSlice } from "@reduxjs/toolkit";
import { IPost, IUser } from "../../api/interface";

export interface State {
    users: IUser[] | null,
    posts: IPost[] | null;
}
const initialState: State = {
    users: null,
    posts: null
}
export const store = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setListUsers: (state, actions) => {
            state.users = actions.payload.users;
        },
        setListPosts: (state, actions) => {
            state.posts = actions.payload.posts
        },
        updateUser: (state, actions) => {
            state.users = actions.payload.users
        },
        deleteUser: (state, actions) => {
            const filteredArray: IUser[] | null = state.users ? state.users?.filter((item) => item.id !== +actions.payload) : null;
            state.users = filteredArray
        },
        addUser: (state, actions) => {
            if (state.users !== null)
                state.users = [...state.users, actions.payload]
        },
        updatePost: (state, actions) => {
            state.posts = actions.payload.post
        },
        deletePost: (state, actions) => {
            const filteredArray: IPost[] | null = state.posts ? state.posts?.filter((item) => item.id !== +actions.payload) : null;
            state.posts = filteredArray
        },
        addPost: (state, actions) => {
            if (state.posts !== null)
                state.posts = [...state.posts, actions.payload]
        },
    },
})

export const { setListUsers, setListPosts, updateUser, deleteUser, addUser, updatePost, deletePost, addPost } = store.actions
export default store.reducer
import { login, signup, logout } from "./actions/session_actions"
import { fetchAllPosts } from './actions/post_actions'
import React from "react";
import ReactDOM from "react-dom";
import configreStore from "./store/store"
import Root from "./components/root";
import { fetchPosts } from "./util/post_api_util"

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if(window.currentUser) {
        const preloadedState = {
            entities: {
                users:  { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configreStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configreStore();
    } 

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root )
})
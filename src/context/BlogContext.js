//import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length + 1}` } ];

        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost ' })
    };
};

// export default BlogContext;
export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost }, 
    []
);
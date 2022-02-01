import React, { useState } from "react";

const BlogContext = React.createContext();


export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {  title: `Blog Post #${blogPost.length + 1}` } ]);
    }
    // const blogPosts = [
    //     { title: 'Blog Post #1' },
    //     { title: 'Blog Post #2' },
    // ];

    return (
        <BlogContext.Provider value={blogPosts} >
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;
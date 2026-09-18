
import React from 'react';

const Post = ({post}) => {
    return (
        <div className="border border-amber-50 p-4 mb-4 rounded shadow-md">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
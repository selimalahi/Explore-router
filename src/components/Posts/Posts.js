import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts =useLoaderData()
    return (
        <div >
            <h2>A lot of fb posts here</h2>
            {
                posts.map(post => <Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;
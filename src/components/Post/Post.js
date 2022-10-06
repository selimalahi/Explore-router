import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const naviGate =useNavigate();
    const handelNavigate = () =>{
        naviGate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><span>{body}</span></p>
            <Link to={`/post/${id}`}>Visit</Link>
            <Link to={`/post/${id}`}>
                <button>Show-Details</button>
            </Link>
            <button onClick={handelNavigate}>second button</button>

        </div>
    );
};

export default Post;
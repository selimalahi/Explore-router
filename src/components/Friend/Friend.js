import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {id, name, email,username} = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><span> <Link to={`/friend/${id}`}>{username}</Link></span></p>
        </div>
    );
};

export default Friend;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend =useLoaderData();
    return (
        <div>
            <h1>Details About :{friend.name}</h1>
            <p>Call him/her : {friend.phone}</p>
            <h3>Every thing is need how to get?</h3>
        </div>
    );
};

export default FriendsDetails;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/Home'>Home</Link>
                <Link to='/friends'>Friends</Link>

                <Link to='/products'>Products</Link>
                <Link to='/About'>About</Link>
            </nav>

            <p>common Page</p>
        </div>
    );
};

export default Header;
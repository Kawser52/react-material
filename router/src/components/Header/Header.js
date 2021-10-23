import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <NavLink to= '/home'  activeStyle={activeStyle}
  >Home</NavLink>
            <NavLink to = '/about' activeStyle={activeStyle}>About</NavLink>
            <NavLink to = '/contact_us' activeStyle={activeStyle}>Contact Us</NavLink>
            <NavLink to = '/friend' activeStyle={activeStyle}>Friend</NavLink>
        </div>
    );
};

export default Header;
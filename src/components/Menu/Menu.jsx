import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
         <nav>
      <ul>
        <li><NavLink to = "/">home</NavLink></li>
        <li><NavLink  to = "/about" >about</NavLink></li>
        <li><NavLink  to = "/contact" >contact</NavLink></li>
        <li><NavLink  to = "/login" >login</NavLink></li>
        <li><NavLink  to = "/signin" >signin</NavLink></li>
        
      </ul>
    </nav>
    );
}

export default Menu;

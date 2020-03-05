import React from 'react';
import logo from './../../../src/logo.svg';
import {NavLink } from 'react-router-dom';
import './Header.css'
const Header = ()=>{
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <ul>
           <li>
               <NavLink exact to="/" activeClassName="active">Home</NavLink >
           </li>
           <li>
               <NavLink  to="/about" activeClassName="active">About</NavLink >
           </li>
           <li>
               <NavLink  to="/dashboard" activeClassName="active">Dashboard</NavLink >
           </li>
           
       </ul>
      </header>
    )
}
export default Header;
import React from 'react';
import logo from './../../../src/logo.svg';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <ul>
           <li>
               <Link to="/home">Home</Link>
           </li>
           <li>
               <Link to="/about">About</Link>
           </li>
           <li>
               <Link to="/dashboard">Dashboard</Link>
           </li>
           
       </ul>
      </header>
    )
}
export default Header;
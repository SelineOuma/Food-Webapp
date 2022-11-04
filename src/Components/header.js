import React from 'react';
import {NavLink} from "react-router-dom";
import './header.css';


const Header = () => {
  return (
    
    <div className='links'>
    <NavLink to="/" activeClassName="is-active1" exact = {true}>
                Home
            </NavLink>
        <NavLink to="/Bresecose" activeClassName ="is-active">
          Bresecose
        </NavLink>
        
            <NavLink to="/Signup" activeClassName="is-active">
              Signup
            </NavLink>
            <NavLink to="/Login" activeClassName="is-active">
                Login
            </NavLink>
            
            
    </div>
    
    
  )
}

export default Header;
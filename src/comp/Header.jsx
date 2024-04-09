import React from 'react';
import { Link,NavLink } from "react-router-dom";
import {useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { auth } from '../firebase/config';
import {signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';



const Header = () => {
  const {theme,changeTheme} = useContext(ThemeContext);
  const [user, loading, error] = useAuthState(auth);
  return (
    <header className="hide-when-mobile">
    <h1>
      <Link to="/">Courses 4 Arab</Link>
    </h1>
    <button onClick={() => {
      changeTheme(theme==="light"?"dark":"light")
    }} className='darky'>{theme}</button>
    <ul className="flex">
      
  {user&& <li className="main-list">
        <NavLink className="main-link" to="/">Home</NavLink>
      </li> }
      {user&&  <li className="main-list">
        <NavLink className="main-link" to="/about">About</NavLink>
      </li> }
      {user&&<li className="main-list">
      <NavLink className="main-link" to="/profile">Profile</NavLink>
        
      </li> }
      {!user&&<li className="main-list">
      <NavLink className="main-link" to="/signin">Signin</NavLink>
      </li>}
      {!user&&<li className="main-list">
      <NavLink className="main-link" to="/signup">Signup</NavLink>
      </li>}
      {user&&<li  className="main-list">
      <NavLink onClick={() => {
        signOut(auth).then(() => {
          console.log("Sign-out successful.")
        }).catch((error) => {
        console.log("An error happened.")
        });
        
      }} className="main-link">Sign Out</NavLink>
      </li>}
    </ul>
  </header>
  );
}

export default Header;

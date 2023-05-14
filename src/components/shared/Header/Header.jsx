import React, { useContext } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(result => {
        console.log('log out');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="w-full bg-purple-500">
      
      <div className="navbar w-90 mx-auto text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
              <NavLink to="/" activeclassname="active-link">Home</NavLink>
            </li>
        <li>
        <NavLink to="/chefs" activeclassname="active-link">Chefs</NavLink>
        </li>
        <li> <NavLink to="/blog" activeclassname="active-link">Blog</NavLink></li>
        <li>
              <NavLink to="/about" activeclassname="active-link">About Us</NavLink>
            </li>
      </ul>
    </div>
    <a className=" invisible  md:visible normal-case text-xl">Awesome Chef</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/" activeclassname="active-link">Home</NavLink></li>
      <li>
      <NavLink to="/chefs" activeclassname="active-link">Chefs</NavLink>
      </li>
      <li> <NavLink to="/blog" activeclassname="active-link">Blog</NavLink></li>
        <li>
              <NavLink to="/about" activeclassname="active-link">About Us</NavLink>
            </li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
          {user && user.photoURL ? (
            <img className="rounded-full w-10" title={user?.displayName} src={user?.photoURL} />
          ) : (
            <span title={user?.displayName} className="text-lg font-bold">{user?.displayName}</span>
          )}
          {user ? (
            <button onClick={handleSignOut} className="btn btn-secondary">
              LogOut
            </button>
          ) : (
            <div className="flex gap-4">
              <button className="btn btn-secondary">
                <NavLink to="/login" activeclassname="active-link">Login</NavLink>
              </button>

              <button className="btn btn-secondary">
                <NavLink to="/register" activeclassname="active-link">Register</NavLink>
              </button>
            </div>
          )}
        </div>
</div>
    </div>
  );
};

export default Header;
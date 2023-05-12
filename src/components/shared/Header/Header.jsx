import React from 'react';
import  './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
 return (
  <div className='w-full bg-purple-500 '>
   
   <div className="navbar w-90 mx-auto text-white">
  <div className="navbar-start">
   
    <a className="btn btn-ghost normal-case text-2xl">Awesome Chef</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/'>Chefs</Link></li>
      <li> <Link to='/blog'>BLog</Link></li>
      <li> <Link to='/blog'>About Us</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <p title='Mir Naiem'>User profile</p>
    <button className='btn btn-secondary'><Link to='/login'>Login</Link></button>
    <button className='btn btn-secondary'><Link to='/logout'>LogOut</Link></button>
    <button className='btn btn-secondary'><Link to='/register'>Register</Link></button>
  </div>
</div>
  </div>
 );
};

export default Header;
import React, { useContext } from 'react';
import  './Header.css'
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  
  const handleSignOut=()=>{
  logOut()
  .then(result=>{console.log('log out')})
  .catch(error=>console.log(error))
  }
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
    {user && <img className='rounded-full w-10' title={user.displayName} src={user.photoURL}/>}
    {user?<button onClick={handleSignOut} className='btn btn-secondary'>LogOut</button> : <div className='flex gap-4'><button className='btn btn-secondary'><Link to='/login'>Login</Link></button>
    
    <button className='btn btn-secondary'><Link to='/register'>Register</Link></button></div>}
    
  </div>
</div>
  </div>
 );
};

export default Header;
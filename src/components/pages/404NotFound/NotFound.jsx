import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
 return (
  <div className='bg-amber-100 min-h-screen flex flex-col justify-center items-center'>
   <img src="https://img.freepik.com/free-vector/404-error-page-found_24908-59516.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" className="mx-auto" />
   <h2 className='text-5xl '>Data not found!! <span className='text-xl'>Back to <Link className='text-blue-600' to='/'>Home</Link></span></h2>
  </div>
 );
};

export default NotFound;

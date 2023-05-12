import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
 return (
  <div className='w-1/3 mx-auto mt-16'>
   
  <div className="relative flex flex-col justify-center  overflow-hidden">
           <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
               <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                  Register
               </h1>
               <form className="mt-6">
                   <div className="mb-2">
                       <label
                           for="name"
                           className="block text-sm font-semibold text-gray-800"
                       >
                           Name
                       </label>
                       <input
                           type="text"
                           name="name"
                           className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                           required
                       />
                   </div>
                   <div className="mb-2">
                       <label
                           for="email"
                           className="block text-sm font-semibold text-gray-800"
                       >
                           Email
                       </label>
                       <input
                           type="email"
                           name='email'
                           className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                           required
                       />
                   </div>
                   <div className="mb-2">
                       <label
                           for="password"
                           className="block text-sm font-semibold text-gray-800"
                       >
                           Password
                       </label>
                       <input
                           type="password"
                           name='password'
                           className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                           required
                       />
                   </div>
                   <div className="mb-2">
                       <label
                           for="password"
                           className="block text-sm font-semibold text-gray-800"
                       >
                           Photo URL
                       </label>
                       <input
                           type="text"
                           name='Photo'
                           className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                       />
                   </div>
                   
                   <div className="mt-6">
                       <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                           Register
                       </button>
                   </div>
               </form>
               
              
               <p className="mt-8 text-xl font-light text-center text-gray-700">
                   
                   Already have an account?
                 <Link className="font-medium text-purple-600 hover:underline" to='/login'>Login</Link>
               </p>
           </div>
       </div>
 </div>
 );
};

export default Register;
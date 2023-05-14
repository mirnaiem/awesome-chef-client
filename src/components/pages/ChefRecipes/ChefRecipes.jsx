import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import LazyLoad from 'react-lazy-load';




const ChefRecipes = () => {
 const chefDetails=useLoaderData()
 const {picture,id,bio, name ,recipes,experience_years,num_recipes,likes}=chefDetails
 
 return (
 <div>
   <div className='bg-indigo-100'>
   <div className='w-90 mx-auto grid grid-cols-2 gap-8 p-10 mb-16'>
    <div className='my-auto'>
     <h2><span className='text-xl font-semibold'>Name:</span> {name}</h2>
     <p><span className='text-xl font-semibold'>Bio:</span> {bio}</p>
     <p><span className='text-xl font-semibold'>Experience:</span> {experience_years}</p>
     <p><span className='text-xl font-semibold'>Recipe:</span> {num_recipes}</p>
     <div className='flex items-center gap-3'><FaThumbsUp></FaThumbsUp> <h3>{likes}</h3></div>
    </div>

  <div>
   
     <LazyLoad height={500} offset={300}><img className='rounded-xl'loading='lazy' src={picture} alt="" /></LazyLoad>
    
  
     
    </div>
    
   </div>
  </div>
    <h2 className='text-5xl text-center my-5'>Recipe</h2>
    <div className='w-90 mx-auto grid grid-cols-3'>
    {recipes.map(recipe=><Recipe recipe={recipe} key={recipe.id}></Recipe>)}
    </div>
 </div>
 );
};

export default ChefRecipes;
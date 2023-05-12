import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const Chef = ({chef}) => {
 const {picture, name ,experience_years,num_recipes,likes}=chef
 return (
  <div>
   <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 ">
  <figure><img src={picture}  /></figure>
  <div className="card-body text-black">
    <h2 className="card-title">{name}</h2>
    <p>Experience: {experience_years} Years</p>
    <p>Number of Recipe: {num_recipes} Items</p>
    <div className="card-actions justify-between items-center">
     <div className='flex items-center gap-2'><FaThumbsUp></FaThumbsUp> <h3>{likes}</h3></div>
    
      <button className="btn btn-primary">View Recipes </button>
    </div>
  </div>
</div>
  </div>
 );
};

export default Chef;
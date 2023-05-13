import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recipe = ({recipe}) => {
 const {recipe_name,rating,ingredients,cooking_method}=recipe
 return (
  <div className="card  w-96 bg-base-100 shadow-xl">
 
  <div className="p-5">
    <h2 className="text-xl">{recipe_name}</h2>
    <p><span className='font-semibold'>Ingredients:</span>{ingredients.map(ingredient=><li>{ingredient}</li>)}</p>
    <p className='my-3'> <span className='font-semibold'>Cooking Method:</span> <br />{cooking_method}</p>
    <div className='flex gap-2 items-center '>
    <Rating
    readonly
  placeholderRating={rating}
  emptySymbol={ <FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
  fullSymbol={<FaRegStar></FaRegStar>}
/>
<p className='mb-2'>{rating}</p>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary">Favorite</button>
    </div>
  </div>
</div>
 );
};

export default Recipe;
import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(true);
    toast.success('Added as a favorite', {
     position: toast.POSITION.TOP_CENTER,
   });
  };
  const { recipe_name, rating, ingredients, cooking_method } = recipe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="p-5">
        <h2 className="text-xl">{recipe_name}</h2>
        <p>
          <span className="font-semibold">Ingredients:</span>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </p>
        <p className="my-3">
          <span className="font-semibold">Cooking Method:</span> <br />
          {cooking_method}
        </p>
        <div className="flex gap-2 items-center ">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-yellow-400" />}
            fullSymbol={<FaRegStar />}
          />
          <p className="mb-2">{rating}</p>
        </div>
        <div className="card-actions">
          <button
            onClick={handleFavorite}
            className="btn btn-primary"
            disabled={favorite}
          >
            {favorite ? 'Added as Favorite' : 'Favorite'}
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

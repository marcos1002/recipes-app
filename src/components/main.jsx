import React, { useState } from 'react';
import SearchBar from './search-bar';
import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';
import { getRecipes, getRecipeDetails } from '../services/recipes';

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSubmit = async (query) => {
    const result = await getRecipes(query);
    setRecipes(result);
  };

  const handleRecipeClick = async (id) => {
    const result = await getRecipeDetails(id);
    console.log(result);
    setSelectedRecipe(result);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Recipes App!</h1>
      <SearchBar onSubmit={handleSubmit} />
      {!selectedRecipe && <RecipeList recipes={recipes} onSelect={handleRecipeClick} />}
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} onReturn={handleClose} />}
    </div>
  );
};

export default Main;

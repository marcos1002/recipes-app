import axios from 'axios';

const { REACT_APP_RAPID_API_KEY } = process.env;

const api = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  },
});

export const getRecipes = async (query) => {
  const {
    data: { results },
  } = await api.get('/recipes/search', {
    params: {
      query,
      number: '5',
      offset: '0',
      type: 'main course',
      instructionsRequired: 'true',
    },
  });
  return results;
};

export const getRecipeDetails = async (id) => {
  const { data } = await api.get(`/recipes/${id}/information`);
  return data;
};

import {API_URL} from './config.js';
import { getJSON } from './helpers.js';

export const state ={
    recipe: {}
};

export const loadRecipe = async function(id){
    try{

    const data = await getJSON(`${API_URL}/${id}`);

    const {recipe} = data.data;
    state.recipe = {
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      title: recipe.title,
      source: recipe.sourceUrl,
    };
    // console.log(state.recipe);
} catch(err){
    console.log(`${err} 😭😭😭`);
}
};
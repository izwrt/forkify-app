import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

//////////////////////////////////////


const controlRecipe = async function(){
  try {

    const id = window.location.hash.slice(1);
    // console.log(id);
  
    if(!id) return;

    //calling module function
    await model.loadRecipe(id);
    // const {recipe} = model.state;

    recipeView.render(model.state.recipe);
    // console.log(data);
    // console.log("Recipe: " , recipe); 
   
  }
  catch(err){
    alert(err);
  }
 }


const init = function(){
  recipeView.addHandlerRender(controlRecipe);
}

init();
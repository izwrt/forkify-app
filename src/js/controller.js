import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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


const evnets = ['hashchange','load'];
evnets.forEach(ev => addEventListener(ev,controlRecipe));




export const state ={
    recipe: {}
};

export const loadRecipe = async function(id){
    try{

    
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = await response.json();
 
 
    if (!response.ok) throw new Error(`${data.message} ${data.status}`);

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
    alert(err);
}
};
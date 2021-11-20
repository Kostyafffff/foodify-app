export const mapRecipeData = (data) => ({
    id: data.idMeal,
    title: data.strMeal,
    image: data.strMealThumb,
    description: data.strInstructions
});

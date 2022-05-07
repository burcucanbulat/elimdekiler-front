import axios from 'axios'

const FOOD_RECIPES_REST_API_URL = 'http://localhost:8080/api/food-recipes';

class FoodRecipeService {

    getFoodRecipes(){
        return axios.get(FOOD_RECIPES_REST_API_URL);
    }
    getFoodRecipeById(id){
        return axios.get(`http://localhost:8080/api/food-recipes/${id}`)
    }
}

export default new FoodRecipeService();
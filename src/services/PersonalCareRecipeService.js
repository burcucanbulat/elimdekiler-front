import axios from 'axios'

const PERSONAL_CARE_RECIPES_REST_API_URL = 'http://localhost:8080/api/personal-care-recipes/rand';

class PersonalCareRecipeService {

    getPersonalCareRecipes(){
        return axios.get(PERSONAL_CARE_RECIPES_REST_API_URL);
    }
    getPersonalCareRecipeById(id){
        return axios.get(`http://localhost:8080/api/food-recipes/${id}`)
    }
}

export default new PersonalCareRecipeService();
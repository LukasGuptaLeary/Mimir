import {IngredientModel} from './ingredient.model';

export interface RecipeModel {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: any[];
    healthLabels: any[];
    cautions: any[];
    ingredientLines: any[];
    ingredients: IngredientModel[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    totalNutrients: any;
    totalDaily: any;
    digest: any[];
}

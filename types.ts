export interface IngredientWithQuantity {
  name: string;
  quantity: string;
}
export interface Drink {
  id: string;
  name: string;
  thumbUrl: string;
  pictureUrl: string;
  ingredients: IngredientWithQuantity[];
  instructions: string[];
  isAlcoholic: boolean;
  category: string;
  tags: string[];
}

export interface CancellableRequest<T> {
  request: Promise<T>;
  cancel: () => void;
}

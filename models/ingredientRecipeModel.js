const mongoose = require('mongoose');

const ingredientRecipeSchema = mongoose.Schema(
  {
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true,
    },
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unitOfMeasure: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UnitOfMeasure',
      required: true,
    },
  }
);

module.exports = mongoose.model('IngredientRecipe', ingredientRecipeSchema);

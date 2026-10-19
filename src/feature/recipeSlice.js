
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [
        {
            id: 1,
            title: "Gujarati Dhokla",
            ingredients: "Besan, lemon juice, Eno, salt, sugar, water",
            instructions:
                "Mix ingredients into a batter, add Eno, steam for 15 minutes, and garnish with mustard seeds.",
            category: "Breakfast",
            cookingTime: "20",
            dietaryPreference: "Vegetarian",

            createdAt: "2026-10-19T10:00:00.000Z",

        },
        {
            id: 2,
            title: "Paneer Butter Masala",
            ingredients: "Paneer, tomatoes, butter, cream, spices",
            instructions:
                "Prepare tomato gravy with spices, add paneer and cream, and simmer until cooked.",
            category: "Lunch",
            cookingTime: "35",
            dietaryPreference: "Vegetarian",

            createdAt: "2026-10-19T10:00:00.000Z",
        },
        {
            id: 3,
            title: "Veg Fried Rice",
            ingredients: "Rice, carrots, capsicum, peas, soy sauce",
            instructions:
                "Stir-fry vegetables, add cooked rice and soy sauce, and mix well.",
            category: "Dinner",
            cookingTime: "25",
            dietaryPreference: "Vegetarian",

            createdAt: "2026-10-19T10:00:00.000Z",
        },
        {
            id: 4,
            title: "Chocolate Cake",
            ingredients: "Flour, cocoa powder, sugar, milk, butter, baking powder",
            instructions:
                "Mix ingredients into a batter, pour into a cake tin, and bake until done.",
            category: "Dessert",
            cookingTime: "45",
            dietaryPreference: "Vegetarian",

            createdAt: "2026-10-19T10:00:00.000Z",
        },
        {
            id: 5,
            title: "Masala Dosa",
            ingredients: "Dosa batter, potatoes, onion, mustard seeds, spices",
            instructions:
                "Prepare spiced potato filling, spread dosa batter on a hot pan, add filling, and fold.",
            category: "Breakfast",
            cookingTime: "30",
            dietaryPreference: "Vegetarian",

            createdAt: "2026-10-19T10:00:00.000Z",
        },
        {
            id: 6,
            title: "Fresh Fruit Salad",
            ingredients: "Apple, banana, grapes, orange, pomegranate",
            instructions:
                "Wash and chop all fruits, mix gently, and serve fresh.",
            category: "Snacks",
            cookingTime: "10",
            dietaryPreference: "Vegetarian",

            createdAt: "2026-10-19T10:00:00.000Z",
        },
    ],
    editValue: null,
};

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        add: (state, action) => {
            const recipe = {
                id: Date.now(),
                title: action.payload.title,
                ingredients: action.payload.ingredients,
                instructions: action.payload.instructions,
                category: action.payload.category,
                cookingTime: action.payload.cookingTime,
                dietaryPreference:action.payload.dietaryPreference,
                createdAt: new Date().toISOString(),
            };

            state.recipes.push(recipe);
        },

        handleEdit: (state, action) => {
            const recipeIndex = state.recipes.findIndex((p) => p.id === state.editValue.id);


            if (recipeIndex !== -1) {
                state.recipes[recipeIndex] = action.payload;
            }

            state.editValue = null;
        },

        handleDelete: (state, action) => {
            state.recipes = state.recipes.filter(
                (recipe) => recipe.id !== action.payload
            );

            if (state.editValue?.id === action.payload) {
                state.editValue = null;
            }
        },

        setEditValue: (state, action) => {
            state.editValue =
                state.recipes.find((recipe) => recipe.id === action.payload);
        },
    },
});

export const {
    add,
    handleEdit,
    handleDelete,
    setEditValue,
} = recipeSlice.actions;

export default recipeSlice.reducer;

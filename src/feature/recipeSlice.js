
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://final-project-react-ho6y.onrender.com/recipes";

// GET: Fetch all recipes
export const fetchRecipes = createAsyncThunk(
    "recipe/fetchRecipes",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch recipes");
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// POST: Add a recipe
export const add = createAsyncThunk(
    "recipe/add",
    async (recipe, { rejectWithValue }) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...recipe,
                    createdAt: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add recipe");
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// PUT: Update a recipe
export const handleEdit = createAsyncThunk(
    "recipe/handleEdit",
    async (recipe, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/${recipe.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(recipe),
            });

            if (!response.ok) {
                throw new Error("Failed to update recipe");
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// DELETE: Delete a recipe
export const handleDelete = createAsyncThunk(
    "recipe/handleDelete",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete recipe");
            }

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    recipes: [],
    editValue: null,
    loading: false,
    error: null,
};

const recipeSlice = createSlice({
    name: "recipe",
    initialState,

    reducers: {
        setEditValue: (state, action) => {
            state.editValue =
                state.recipes.find(
                    (recipe) => String(recipe.id) === String(action.payload)
                ) || null;
        },

        clearEditValue: (state) => {
            state.editValue = null;
        },
    },

    extraReducers: (builder) => {
        builder
            // Fetch recipes
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })

            // Add recipe
            .addCase(add.fulfilled, (state, action) => {
                state.recipes.push(action.payload);
                state.editValue = null;
            })
            .addCase(add.rejected, (state, action) => {
                state.error = action.payload || action.error.message;
            })

            // Update recipe
            .addCase(handleEdit.fulfilled, (state, action) => {
                const index = state.recipes.findIndex(
                    (recipe) => String(recipe.id) === String(action.payload.id)
                );

                if (index !== -1) {
                    state.recipes[index] = action.payload;
                }

                state.editValue = null;
            })
            .addCase(handleEdit.rejected, (state, action) => {
                state.error = action.payload || action.error.message;
            })

            // Delete recipe
            .addCase(handleDelete.fulfilled, (state, action) => {
                state.recipes = state.recipes.filter(
                    (recipe) => String(recipe.id) !== String(action.payload)
                );

                if (
                    String(state.editValue?.id) === String(action.payload)
                ) {
                    state.editValue = null;
                }
            })
            .addCase(handleDelete.rejected, (state, action) => {
                state.error = action.payload || action.error.message;
            });
    },
});

export const { setEditValue, clearEditValue } = recipeSlice.actions;

export default recipeSlice.reducer;

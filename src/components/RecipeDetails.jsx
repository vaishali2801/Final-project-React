
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRecipes } from "../feature/recipeSlice";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { recipes, loading, error } = useSelector(
    (state) => state.recipe
  );

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipes.length]);

  // Handle both string and number IDs
  const recipe = recipes.find(
    (item) => String(item.id) === String(id)
  );

  if (loading && recipes.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h3>Loading recipe...</h3>
      </Container>
    );
  }

  if (error && recipes.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h3>Unable to load recipes</h3>
        <p>{error}</p>
        <Button onClick={() => dispatch(fetchRecipes())}>
          Retry
        </Button>
      </Container>
    );
  }

  if (!recipe) {
    return (
      <Container className="mt-5 text-center">
        <h3>Recipe not found!</h3>
        <Button onClick={() => navigate("/recipeList")}>
          Back to Recipes
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <h1>{recipe.title}</h1>
          <hr />

          <h4>Ingredients</h4>
          <p>{recipe.ingredients}</p>

          <h4>Instructions</h4>
          <p>{recipe.instructions || "Not provided"}</p>

          <h4>Category</h4>
          <p>{recipe.category || "Not selected"}</p>

          <h4>Dietary Preference</h4>
          <p>{recipe.dietaryPreference || "Not specified"}</p>

          <h4>Cooking Time</h4>
          <p>
            {recipe.cookingTime
              ? `${recipe.cookingTime} minutes`
              : "Not provided"}
          </p>

          <Button
            variant="secondary"
            onClick={() => navigate("/recipeList")}
          >
            Back to Recipes
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeDetails;

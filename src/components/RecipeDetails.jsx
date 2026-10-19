
import { useSelector } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { fetchRecipes } from "../feature/recipeSlice";
import { useDispatch } from "react-redux";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipes = useSelector((state) => state.recipe.recipes);

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <Container className="mt-5 text-center">
        <h3 className="text-light">Recipe not found!</h3>
        <Button onClick={() => navigate("/recipes")}>
          Back to Recipes
        </Button>
      </Container>
    );
  }
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipes.length]);

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <h1>{recipe.title}</h1>
          <hr />
          <p>
            <h2>Ingredients:</h2> {recipe.ingredients}
          </p>
          <p>
            <h2>Instructions:</h2>{" "}
            {recipe.instructions}
          </p>
          <p>
            <h2>Category:</h2>{" "}
            {recipe.category}
          </p>
          <p>
            <h2>Cooking Time:</h2>{" "}
            {recipe.cookingTime
              ? `${recipe.cookingTime} minutes`
              : "Not provided"}
          </p>
          <Button variant="secondary" onClick={() => navigate(-1)} >Back to Recipes </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeDetails;

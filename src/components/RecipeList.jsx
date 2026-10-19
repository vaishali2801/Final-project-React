
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { setEditValue, handleDelete } from "../feature/recipeSlice";
import { useAuth } from "../context/AuthContext";

const RecipeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = useSelector((state) => state.recipe.recipes);
  const { user,loading } = useAuth();

  const [sortBy, setSortBy] = useState("name");
  const [category, setCategory] = useState("All");
  const [diet, setDiet] = useState("All");

const filteredRecipes = recipes
  .filter((recipe) =>
    category === "All" || recipe.category === category
  )
  .filter((recipe) =>
    diet === "All" || recipe.dietaryPreference === diet
  )
  .sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "newest") {
      return new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0);
    }

    return new Date(a.createdAt || 0) -
      new Date(b.createdAt || 0);
  });

  const handleEdit = (recipe) => {
    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(setEditValue(recipe.id));
    navigate("/recipeForm");
  };

  const handleDeleteRecipe = (id) => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (window.confirm("Are you sure you want to delete this recipe?")) {
      dispatch(handleDelete(id));
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Recipe List</h2>

      <Row className="mb-4 g-3">
        <Col md={4}>
          <Form.Label>Sort By</Form.Label>
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name (A–Z)</option>
            <option value="newest">Date Added (Newest)</option>
            <option value="oldest">Date Added (Oldest)</option>
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Snacks">Snacks</option>
          </Form.Select>
        </Col>

        <Col md={4}>
          <Form.Label>Dietary Preference</Form.Label>
          <Form.Select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
          >
            <option value="All">All Preferences</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Gluten-Free">Gluten-Free</option>
          </Form.Select>
        </Col>
      </Row>

      {!user && (
        <p className="text-center text-muted">
          Log in to add, edit, or delete recipes.
        </p>
      )}

      {filteredRecipes.length === 0 ? (
        <p className="text-center">No matching recipes found.</p>
      ) : (
        <Row className="g-4">
          {filteredRecipes.map((recipe) => (
            <Col md={6} lg={4} key={recipe.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </Card.Text>
                  <Card.Text>
                    <strong>Instructions:</strong>{" "}
                    {recipe.instructions || "Not provided"}
                  </Card.Text>
                  <Card.Text>
                    <strong>Category:</strong> {recipe.category || "Not selected"}
                  </Card.Text>
                  <Card.Text>
                    <strong>Diet:</strong>{" "}
                    {recipe.dietaryPreference || "Not specified"}
                  </Card.Text>
                  <Card.Text>
                    <strong>Cooking Time:</strong>{" "}
                    {recipe.cookingTime
                      ? `${recipe.cookingTime} minutes`
                      : "Not provided"}
                  </Card.Text>

                  <Button
                    variant="success"
                    className="mb-2 me-2"
                    onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
                  >
                    View Details
                  </Button>

                  {user && (
                    <>
                      <Button
                        variant="primary"
                        className="mb-2 me-2"
                        onClick={() => handleEdit(recipe)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="mb-2"
                        onClick={() => handleDeleteRecipe(recipe.id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default RecipeList;

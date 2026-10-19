import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";

import { add, handleEdit } from "../feature/recipeSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RecipeForm = () => {

  const [input, setInput] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
    cookingTime: "",
    dietaryPreference: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  if (loading) {
    return <p className="text-center mt-5">Checking login...</p>;
  }

  if (!user) {
    return (
      <Container className="text-center mt-5">
        <h3>Please log in to manage recipes.</h3>
        <Button onClick={() => navigate("/login")}>
          Login
        </Button>
      </Container>
    );
  }
  const { recipes, editValue } = useSelector(
    (state) => state.recipe
  );
  useEffect(() => {
    if (editValue) {
      setInput({
        title: editValue.title,
        ingredients: editValue.ingredients,
        instructions: editValue.instructions,
        category: editValue.category,
        cookingTime: editValue.cookingTime,
        dietaryPreference: editValue.dietaryPreference || "Vegetarian",
      });
    } else {
      setInput({
        title: "",
        ingredients: "",
        instructions: "",
        category: "",
        cookingTime: "",
        dietaryPreference: "Vegetarian",
      });
    }
  }, [editValue]);

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    if (!user) {
      navigate("/login");
      return;
    }
    if (editValue) {
      dispatch(
        handleEdit({
          ...input,
          id: editValue.id,
        })
      );
      navigate("/recipeList");
    } else {
      dispatch(add(input));
    }


    setInput({
      title: "",
      ingredients: "",
      instructions: "",
      category: "",
      cookingTime: "",
      dietaryPreference: "Vegetarian",
    });
    navigate("/recipeList");
  }
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Card className="p-3 mt-3 fs-4" >
                <h1 className="text-center"> 🍳 Recipe Form</h1>
                <Form.Group as={Col}>
                  <Form.Label className="m-2">Title :</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Title"
                    className="m-2"
                    value={input.title}
                    onChange={(e) => handleChange("title", e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className="m-2">Ingredients :</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingredients"
                    className="m-2"
                    value={input.ingredients}
                    onChange={(e) => handleChange("ingredients", e)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="m-2">Instructions :</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Instructions"
                    value={input.instructions}
                    className="m-2"
                    onChange={(e) => handleChange("instructions", e)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="m-2">Category :</Form.Label>
                  <Form.Select
                    value={input.category}
                    className="m-2"
                    onChange={(e) => handleChange("category", e)}
                  >
                    <option value="">Select Category</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Snacks">Snacks</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="m-2">Cooking Time :</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    placeholder="Cooking Time (minutes)"
                    value={input.cookingTime}
                    className="m-2"
                    onChange={(e) => handleChange("cookingTime", e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="m-2">Dietary Preference:</Form.Label>
                  <Form.Select
                    value={input.dietaryPreference}
                    className="m-2"
                    onChange={(e) =>
                      handleChange("dietaryPreference", e)
                    }
                  >
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                  </Form.Select>
                </Form.Group>

                <Button type="submit" className="btn-lg">
                  {editValue ? "Update Recipe" : "Add Recipe"}
                </Button>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RecipeForm

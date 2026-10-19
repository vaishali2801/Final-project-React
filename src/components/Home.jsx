import { Container, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className='' style={{height:"100vh"}}>
      <Container className="text-center mt-5">
      <Card className="p-5 shadow-sm border-0">
        <h1>🍳 Welcome to RecipeBook</h1>

        <p className="text-muted mt-3 fs-5">
          Discover delicious recipes and learn to cook
          your favorite dishes at home!
        </p>

        <div className="mt-3">
          <Button variant="success" as={NavLink} to={"/recipeList"}>
            View Recipes
          </Button>
        </div>
      </Card>

      <h2 className="mt-5 text-light" >What You Can Do</h2>

      <div className="mt-4 text-light">
        <p>🍕 Explore different recipes</p>
        <p>🥗 Discover new ingredients</p>
        <p>🍰 Add your own favorite recipes</p>
      </div>
    </Container>
    </div>
  )
}

export default Home

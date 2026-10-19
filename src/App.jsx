import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "./Routes/MainLayout";
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    errorElement: <h1>Error</h1>,

    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"recipeForm",
        element:<RecipeForm/>
      },
      {
        path:"recipeList",
        element:<RecipeList/>
      },
      {
        path:"recipeDetails/:id",
        element:<RecipeDetails/>
      },
      {
        path:"login",
        element:<LoginPage/>
      }
    ]

  }])

  return (
    <Suspense >
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
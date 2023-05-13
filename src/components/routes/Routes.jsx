import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
 {
   path: "/",
   element: <Main></Main>,
   children:[
    {
     path:'/',
     element:<Home></Home>,
     loader:()=>fetch('http://localhost:3000/chefs')
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'register',
      element:<Register></Register>
    },
    {
      path:'recipes/:id',
      element:<ChefRecipes></ChefRecipes>,
      loader:({params})=>fetch(`http://localhost:3000/chefs/${params.id}`)
    }
   ]
 },
]);

export default router;
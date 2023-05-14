import {  createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/404NotFound/NotFound";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
 {
   path: "/",
   element: <Main></Main>,
   children:[
    {
     path:'/',
     element:<Home></Home>,
     loader:()=>fetch('https://assignment-10-server-mirnaiem.vercel.app/chefs')
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
      element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
      loader:({params})=>fetch(`https://assignment-10-server-mirnaiem.vercel.app//chefs/${params.id}`)
    },
    {
      path:'blog',
      element:<Blog></Blog>
    }
   ]
 },
 {
  path:'*',
  element:<NotFound></NotFound>
 }
]);

export default router;
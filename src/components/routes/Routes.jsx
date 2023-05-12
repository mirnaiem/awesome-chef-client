import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
 {
   path: "/",
   element: <Main></Main>,
   children:[
    {
     path:'/',
     element:<Home></Home>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'register',
      element:<Register></Register>
    }
   ]
 },
]);

export default router;
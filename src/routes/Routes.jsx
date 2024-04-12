import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../page/Home";
import About from "../page/about/About";
import Career from "../page/career/Career";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children:[
        {
            path:'/',
            element:<Home/>

        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/career',
            element:<Career/>
        },
        {
          path:'/register',
          element:<Register/>

        },
        {
          path:'/login',
          element:<Login/>
        }
      ]
    },
  ]);
  export default router
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../page/Home";
import About from "../page/about/About";
import Career from "../page/career/Career";
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
      ]
    },
  ]);
  export default router
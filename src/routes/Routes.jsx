import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../page/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children:[
        {
            path:'/',
            element:<Home/>

        }
      ]
    },
  ]);
  export default router
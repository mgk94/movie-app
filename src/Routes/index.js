import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ExplorePage from "../Pages/ExplorePage";
import SearchPage from "../Pages/SearchPage";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
        path: "",
      element: <Home/>,

      },
      {
        path: "explore",
      element: <ExplorePage/>,

      },
      {
        path: "search",
      element: <SearchPage/>,

      },
    ]
    },
  

  ]);

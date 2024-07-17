import HomePage from "./pages/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import ListPage from "./pages/listPage/listPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/singlePage";
import ProfilePage from "./pages/profilePage/profilePage"
import Login from "./pages/login/login";
import Register from "./pages/Register/register";
import ProfileUpdatePage from "./pages/profileUpdatePage/profileUpdatePage";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {

  const router = createBrowserRouter ([
    {
      path: "/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
        path:"/list",
        element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
          },
          {
            path:"/profile",
            element:<ProfilePage/>
            },
            {
              path:"/login",
              element:<Login/>
              },
              {
                path:"/register",
                element:<Register/>
                },
                {
                  path:"/profile/update",
                  element:<ProfileUpdatePage/>
                  }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/Home/JobDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: <h2>Route Not Found</h2>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'signIn',
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;
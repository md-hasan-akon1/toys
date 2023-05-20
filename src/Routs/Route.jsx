import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Terms from "../Pages/Terms/Terms";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/Mytoys";
import PrivetRout from "../PrivetRout/PrivetRout";
import AddToy from "../Pages/AddToy/AddToy";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:"/terms",
          element:<Terms></Terms>
        },
        {
          path:'/alltoys',
          element:<PrivetRout><AllToys></AllToys></PrivetRout>
        },
        {
          path:'/mytoys',
          element:<PrivetRout><MyToys></MyToys></PrivetRout>
        },
        {
          path:'/addtoy',
          element:<PrivetRout><AddToy></AddToy></PrivetRout>
        },
        {
          path:'/viewDetail/:id',
          element:<ViewDetails></ViewDetails>,

        }
      ]
    },
  ]);


  export default router;
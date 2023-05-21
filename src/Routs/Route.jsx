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
import AddedDataDetail from "../Pages/AddedDataDetail/AddedDataDetail";
import UpDate from "../Pages/UpDate/UpDate";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/mytoys',
        element: <PrivetRout><MyToys></MyToys></PrivetRout>
      },
      {
        path: '/addtoy',
        element: <PrivetRout><AddToy></AddToy></PrivetRout>
      },
      {
        path: '/viewDetail/:id',
        element: <PrivetRout><ViewDetails></ViewDetails></PrivetRout>,

      },
      {
        path: '/addDataDetail/:id',
        element: <PrivetRout><AddedDataDetail></AddedDataDetail></PrivetRout>
      },
      {
        path: '/myToys/update/:id',
        element: <PrivetRout><UpDate></UpDate></PrivetRout>,
        loader: ({ params }) => fetch(`https://assignment-11-server-phi-five.vercel.app/addDataDetail/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);


export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import About from "../Pages/About";
import AllTouristSpot from "../Pages/AllTouristSpot";
import AddTouristSpot from "../Pages/AddTouristSpot";
import Contact from "../Pages/Contact";
import MyList from "../Pages/MyList";
import UpdateInfo from "../Pages/UpdateInfo";
import PrivateRoutes from "../Routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allspots",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/spots"),
      },
      {
        path: "/addspots",
        element: (
          <PrivateRoutes>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mylist/updateInfo/:id",
        element: <UpdateInfo></UpdateInfo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spots/${params.id}`),
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
        loader: () => fetch("http://localhost:5000/spots"),
      },

      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;

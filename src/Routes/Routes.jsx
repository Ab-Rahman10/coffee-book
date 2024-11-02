import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;

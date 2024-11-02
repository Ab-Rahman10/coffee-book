import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default router;

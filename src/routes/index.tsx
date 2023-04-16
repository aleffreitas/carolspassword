import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Quiz } from "../pages/Quiz";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);
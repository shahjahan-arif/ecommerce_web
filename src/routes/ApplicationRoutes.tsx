import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, Login, Signup } from "../views/Index";

export default function ApplicationRoutes() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },

  ]);
  return <RouterProvider router={router} />;
}

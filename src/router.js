import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [{ path: "", element: <HomePage/> }],
  }
]);

export default router;

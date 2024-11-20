import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./Pages/HomePage";
import ContactLayout from "./Layouts/ContactLayout";
import ContactPage from "./Pages/ContactPage";
import ServiceLayout from "./Layouts/ServiceLayout";
import ServicePage from "./Pages/ServicePage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [{ path: "", element: <HomePage/> }],
  },
  {
    path: "/contact",
    element: <ContactLayout/>,
    children: [{ path: "", element: <ContactPage/> }],
  },
  {
    path: "/service",
    element: <ServiceLayout/>,
    children: [{ path: "", element: <ServicePage/> }],
  }
]);

export default router;

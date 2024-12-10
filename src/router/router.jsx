import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import About from "../Pages/AboutPages/About/About";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/HomePages/Home/Home";
import ForgotPassword from "../Pages/Register/ForgetPassword/ForgetPassword";
import Login from "../Pages/Register/Login/Login";
import Register from "../Pages/Register/Register/Register";
import Service from "../Pages/ServicePages/Service/Service";
import ServicePost from "../Pages/ServicePostPage/ServicePost/ServicePost";
import ServiceRequest from "../Pages/ServiceRequestPages/ServiceRequest/ServiceRequest";
import Dashboard from "../Pages/UserDashboardPages/Dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us-more-information",
        element: <About />,
      },
      {
        path: "/all-repair-services",
        element: <Service />,
      },
      {
        path: "/service-request",
        element: (
          <PrivateRouter>
            <ServiceRequest />
          </PrivateRouter>
        ),
      },
      {
        path: "/all-repair-service-post",
        element: (
          <PrivateRouter>
            <ServicePost />
          </PrivateRouter>
        ),
      },
      {
        path: "/user-dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },

      {
        path: "*",
        element: <ErrorPages />,
      },
    ],
  },
]);

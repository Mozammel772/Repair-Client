import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/DashBoard/Dashboard";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import ServicesLayout from "../layout/ServicesLayout/ServicesLayout";
import About from "../Pages/AboutPages/About/About";
import AllUsers from "../Pages/DashboardPages/AllUsers/AllUsers";
import Dashboardhome from "../Pages/DashboardPages/Dashboardhome/Dashboardhome";
import UserServicePost from "../Pages/DashboardPages/UserServicePost/UserServicePost";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/HomePages/Home/Home";
import AllServices from "../Pages/HomePages/ServicePages/AllServices/AllServices";
import EletricalServices from "../Pages/HomePages/ServicePages/EletricalRepairServices/EletricalServices";
import ServiceDetails from "../Pages/HomePages/ServicePages/Services/ServiceDetails";
import ForgotPassword from "../Pages/Register/ForgetPassword/ForgetPassword";
import Login from "../Pages/Register/Login/Login";
import Register from "../Pages/Register/Register/Register";
import ServicePost from "../Pages/ServicePostPage/ServicePost/ServicePost";
import ServiceRequest from "../Pages/ServiceRequestPages/ServiceRequest/ServiceRequest";
import AdminRouter from "./AdminRouter/AdminRouter";
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
        path: "all-repair-services",
        element: <ServicesLayout />,
        children: [
          {
            path: "",
            element: <AllServices />,
          },
          {
            path: "electrical-repair-service",
            element: <EletricalServices />,
          },
        ],
      },
      {
        path: `/all-repair-services/:id`,
        element: <ServiceDetails />,
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
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "home",
        element: <Dashboardhome />,
      },
      {
        path: "users-services-post",
        element: <UserServicePost />,
      },
      {
        path: "all-users",
        element: (
          <AdminRouter>
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
      {
        path: "profile",
        element: <div>Profile Page</div>,
      },
      {
        path: "settings",
        element: <div>Settings Page</div>,
      },
      {
        path: "*",
        element: <div>404 Page</div>,
      },
    ],
  },
]);

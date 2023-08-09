import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import DocProfile from "../pages/DoctorProfile/DocProfile/DocProfile";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/Shared/PageNotFound/NotFound";
import Services from "../pages/Services/Services";
import CheckOut from "../pages/Services/CheckOut/CheckOut";
import DashBoard from "../Layout/DashBoard";
import Admin from "../pages/DashboardRoute/Admin/Admin";
import User from "../pages/DashboardRoute/User/User";
import Appointments from "../pages/DashboardRoute/Appointments/Appointments";
import AllUsers from "../pages/DashboardRoute/Admin/AllUsers";
import AddDoc from "../pages/DashboardRoute/Admin/AddDoc";
import AdminRoute from "./AdminRoute";
import ManageDoc from "../pages/DashboardRoute/Admin/ManageDoc";
import Payment from "../pages/DashboardRoute/User/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "docprofile/:id",
                element: <DocProfile></DocProfile>,
                loader: ({ params }) => fetch(`https://doc-house-server-shakilkhan80.vercel.app/doctor/${params.id}`)
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'sign',
                element: <SignUp></SignUp>
            },
            {
                path: "not",
                element: <NotFound></NotFound>
            },
            {
                path: "appointment",
                element: <Services></Services>
            },
            {
                path: "checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`https://doc-house-server-shakilkhan80.vercel.app/service/${params.id}`)
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: "dashboard",
                element: <DashBoard></DashBoard>
            },
            {
                path: 'user',
                element: <User></User>
            },
            {
                path: 'appointment',
                element: <Appointments></Appointments>
            },
            // admin section
            {
                path: 'admin-home',
                element: <AdminRoute><Admin></Admin></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'add-doc',
                element: <AdminRoute><AddDoc></AddDoc></AdminRoute>
            },
            {
                path: 'manage-doc',
                element: <AdminRoute><ManageDoc></ManageDoc></AdminRoute>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]

    },
]);

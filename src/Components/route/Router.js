import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import AddProduct from "../DashBoard/AddProduct/AddProduct";
import AllByers from "../DashBoard/AllByers/AllByers";
import AllSeller from "../DashBoard/AllSeller/AllSeller";
import MyOrders from "../DashBoard/MyOrders/MyOrders";
import MyProducts from "../DashBoard/MyProducts/MyProducts";
import ReportToAdmin from "../DashBoard/ReportToAdmin/ReportToAdmin";
import ErrorPage from "../ErrorPage/ErrorPage";
// import DashBoard from "../DashBoard/DashBoard";
// import MyApointment from "../DashBoard/MyApointment/MyApointment";
import Home from "../Home/Home";
import DashBoardLayOut from "../LayOut/DashBoardLayOut";
import LayOut from "../LayOut/LayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Payment from "../Payment/Payment";
import AdminRoute from "../PrivateRoute/AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Products from "../Products/Products";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<LayOut></LayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/products/:name',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
            // {
            //     path:'/category/:id',
            //     element:<Products></Products>,
            //     loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            // }

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
        children:[
            {
                path:'/dashboard/myorder',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/allseller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AdminRoute><AllByers></AllByers></AdminRoute>
            },
            {
                path:'/dashboard/reporttoadmin',
                element:<AdminRoute><ReportToAdmin></ReportToAdmin></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`http://localhost:5000/dashboard/payment/${params.id}`)
               
            }
        ]
    }
   
    
]);
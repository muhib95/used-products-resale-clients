import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Home from "../Home/Home";
import DashBoardLayOut from "../LayOut/DashBoardLayOut";
import LayOut from "../LayOut/LayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Products from "../Products/Products";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<LayOut></LayOut>,
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
                path:'/dashboard',
                element:<DashBoard></DashBoard>
            }
        ]
    }
   
    
]);
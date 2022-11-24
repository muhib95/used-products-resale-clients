import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Dashboard/DashboardPages/DashBoard";
import Home from "../Home/Home";
import LayOut from "../LayOut/LayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
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
                element:<Products></Products>,
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
        element:<DashBoard></DashBoard>

    }
   
    
]);
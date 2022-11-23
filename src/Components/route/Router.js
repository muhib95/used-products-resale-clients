import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import LayOut from "../LayOut/LayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
            }

        ]
    }
   
    
]);
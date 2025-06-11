import { createBrowserRouter } from "react-router-dom";
import App from '../utilities/App.jsx'
import Signup from '../pages/signup.jsx'
import Layout from '../components/layout.jsx'
import Authentication from '../pages/Authentication.jsx'
import Cart from "../pages/cart.jsx";
import BecomeSeller from "../pages/becomeseller.jsx";
import Login from "../pages/Login.jsx";
export const router=createBrowserRouter([
 {
  path:"/",
  Component:App,
  children:[
   {
   path:"/",
   Component:Layout,
   },
   {
    path:"signup",
    Component:Signup,
   },
   {
   path:"login",
   Component:Authentication,
   },
   {
   path:'cart',
   Component:Cart,
   },
   {
    path:'becomeaseller',
    Component:BecomeSeller,
    
   }
  ]
 }
])
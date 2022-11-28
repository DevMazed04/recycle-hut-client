import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import SingleCategory from "../../Pages/Categories/SingleCategory/SingleCategory";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Page404/Page404";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/home",
            element: <Home></Home>,
         },
         {
            path: "/category/:id",
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
            element:
               <PrivateRoute>
                  <SingleCategory></SingleCategory>
               </PrivateRoute>,
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         }
      ],
   },

   {
      path: "/dashboard",
      element:
         <PrivateRoute>
            <DashboardLayout></DashboardLayout>
         </PrivateRoute>,
      children: [
         {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
         },
         {
            path: "/dashboard/myorders",
            element:
               <BuyerRoute>
                  <MyOrders></MyOrders>
               </BuyerRoute>
         },
         {
            path: "/dashboard/addproduct",
            element:
               <SellerRoute>
                  <AddProduct></AddProduct>
               </SellerRoute>
         },
         {
            path: "/dashboard/myproducts",
            element:
               <SellerRoute>
                  <MyProducts></MyProducts>
               </SellerRoute>
         },
         {
            path: "/dashboard/allusers",
            element:
               <AdminRoute>
                  <AllUsers></AllUsers>
               </AdminRoute>
         },
         {
            path: "/dashboard/allbuyers",
            element:
               <AdminRoute>
                  <AllBuyers></AllBuyers>
               </AdminRoute>
         },
         {
            path: "/dashboard/allsellers",
            element:
               <AdminRoute>
                  <AllSellers></AllSellers>
               </AdminRoute>
         },
         {
            path: "/dashboard/reporteditems",
            element:
               <AdminRoute>
                  <ReportedItems></ReportedItems>
               </AdminRoute>
         },
      ]
   },

   {
      path: '*',
      element: <Page404></Page404>
   }
]);

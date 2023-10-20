import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
import Products from "../pages/Products";
import UpdateProduct from "../pages/UpdateProduct";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://brand-shop-server-as10-lkff23d4q-abdur-rahmans-projects.vercel.app/brands')
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://brand-shop-server-as10-lkff23d4q-abdur-rahmans-projects.vercel.app/products')
            },
            {
                path: '/updateProducts/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`https://brand-shop-server-as10-lkff23d4q-abdur-rahmans-projects.vercel.app/products/${params.id}`)
            }, {
                path: '/productDetails/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-as10-lkff23d4q-abdur-rahmans-projects.vercel.app/products/${params.id}`)
            }

        ]
    },
]);

export default router;
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import Register from "../views/register/index.jsx";
import Login from "../views/login/index.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router

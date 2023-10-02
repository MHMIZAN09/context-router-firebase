import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Orders from './Components/Orders';
import Register from './Components/Register';
import Root from './Components/Root';
import './index.css';
import AuthProvider from './provider/authProvider';
import Privateroute from './routes/Privateroute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      }, {
        path: "/register",
        element: <Register />
      },
      {
        path: "/orders",
        element: <Privateroute><Orders></Orders></Privateroute>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

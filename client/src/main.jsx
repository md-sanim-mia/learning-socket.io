import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './layouts/MainLayout.jsx';
import Signup from './Pages/Register/Signup.jsx';
import Login from './Pages/Register/LoginPage/Login.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
     {
      path:"/",
      element:<HomePage></HomePage>
     }
     
    ]
    
  },{
      path:'/signup-users',
      element:<Signup></Signup>
  },{
    path:'/login-page',
    element:<Login></Login>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </StrictMode>,
)

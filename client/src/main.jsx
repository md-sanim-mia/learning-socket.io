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
import { AuthProvider } from './Providers/AuthProvider.jsx';
import VerifyUser from './utils/VerifyUser.jsx';
import MessageBox from './Pages/MessageBox/MessageBox.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element:<VerifyUser>
       <MainLayout></MainLayout>
    </VerifyUser> ,
    children:[
     {
      path:"/",
      element:<VerifyUser>
        <HomePage></HomePage>
      </VerifyUser>
     },
     {
path:'/messagebox/:id',
element:<MessageBox></MessageBox>,
loader:({params})=>fetch(`http://localhost:5000/api/users/chater/${params.id}`,{credentials:'include'})
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
  <div className=''>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  <ToastContainer />
  </div>
  </StrictMode>,
)

 
import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
} from "react-router-dom";

 
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider';
import { router } from './Routers/Route';
 
 
 
 
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
        <HelmetProvider>   
          <RouterProvider router={router} />
        </HelmetProvider>
       
    </AuthProvider>
  </React.StrictMode>
);


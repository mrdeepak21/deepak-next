'use client';
import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Background() {
  return (
    <>
        {/* <!-- Animated Background --> */}
    <div className="lm-animated-bg"></div>
    {/* <!-- /Animated Background --> */}
    <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
    </>
  )
}
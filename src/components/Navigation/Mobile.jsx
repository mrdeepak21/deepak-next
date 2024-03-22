'use client';
import React from 'react'

function Mobile() {
  return (
   <>
             {/* <!-- Mobile Navigation --> */}
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* <!-- End Mobile Navigation --> */}
          {/* <!-- Arrows Nav --> */}
          <div className="lmpixels-arrows-nav">
            <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
            <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
          </div>
          {/* <!-- End Arrows Nav --> */}
   </>
  )
}

export default Mobile
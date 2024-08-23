'use client';
import Image from 'next/image';
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Blog() {
  return (
    <PerfectScrollbar component="section" className='animated-section'>
      {/* <!-- Blog Subpage --> */}
      <div className="section-content">
        <div className="page-title">
          <h2>Blog</h2>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            {/* <div className="blog-masonry two-columns clearfix"> */}
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2}}
            >
                <Masonry>

              {/* <!-- Blog Post 1 --> */}
              <div className="item post-1">
                <div className="blog-card">
                  <div className="media-block">
                    <div className="category">
                      <a href="#" title="View all posts in Design">Design</a>
                    </div>
                    <a href="#">
                      <Image src="/img/blog/blog_post_1.jpg" width={800} height={375} className="size-blog-masonry-image-two-c" alt="Why I Switched to Sketch For UI Design" title="" />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="post-info">
                    <div className="post-date">05 Mar 2020</div>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">Why I Switched to Sketch For UI Design</h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End of Blog Post 1 --> */}
              </Masonry>
            </ResponsiveMasonry>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <!-- End of Blog Subpage --> */}
    </PerfectScrollbar>
  )
}


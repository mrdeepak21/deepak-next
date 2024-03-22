'use client';
import Image from 'next/image';
import React from 'react'
import featuredImage from '@/../public/img/blog/blog_post_1_full.jpg'
import ShareBtn from '@/components/ShareBtns/ShareBtn';

function Article({params}) {
  const {title} = params;
  return (
    <>
            <div className="single-page-content">

              <article className="post">

                <div className="post-thumbnail">
                  <Image src={featuredImage} alt="image" placeholder="blur"/>
                </div>

                <div className="post-content">
                  {/* <!-- /Entry header --> */}
                  <header className="entry-header">
                    {/* <!-- Entry meta --> */}
                    <div className="entry-meta entry-meta-top">
                      <span><a href="#" rel="category tag">UI</a></span>        
                    </div>
                    {/* <!-- /Entry meta --> */}

                    <h2 className="entry-title">{title}</h2>
                  </header>
                  {/* <!-- /Entry header --> */}

                  {/* <!-- Entry content --> */}
                  <div className="entry-content">
                    <div className="row">
                      <div className=" col-xs-12 col-sm-12 ">
                        <div className="col-inner">
                          <p>Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem.</p><p>Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.</p>
                          
                          <blockquote className="quote">Maecenas id finibus felis. Etiam vitae nibh et felis efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut. In hac habitasse platea dictumst.
                            <footer className="quote-author">
                              <span>Larry L. Johnson</span>
                            </footer>
                          </blockquote>

                          <p>Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit amet semper purus tortor id ante. Donec lacus ipsum, porttitor et libero a, fringilla auctor quam. Sed in nisl id libero tincidunt aliquet. Aenean dui ipsum, auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus viverra consequat. Maecenas efficitur massa vel eros sagittis dapibus. Nam lobortis mi in turpis hendrerit eleifend. Nulla non massa felis.</p>

                          <p>Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis, convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis. Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed bibendum faucibus, semper a dui.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Entry content --> */}
    
                  <div className="entry-meta entry-meta-bottom">
                    <div className="date-author">
                      <span className="entry-date">
                        <a href="#" rel="bookmark">
                          <i className="far fa-clock"></i> <span className="entry-date"> March 16, 2020</span>
                        </a>
                      </span>
                      <span className="author vcard">
                        <a className="url fn n" href="#" rel="author"> <i className="fas fa-user"></i> Deepak</a>
                      </span>
                    </div>
                  <ShareBtn/>
                  </div>

                  <div className="post-tags">
                    <div className="tags">
                      <a href="#" rel="tag">animate</a>
                      <a href="#" rel="tag">bar</a>
                      <a href="#" rel="tag">design</a>
                      <a href="#" rel="tag">progress</a>
                      <a href="#" rel="tag">ui</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
    </>
  )
}

export default Article
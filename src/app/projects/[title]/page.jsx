'use client';
import Image from 'next/image';
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Img1 from "@/../public/img/portfolio/full/1.jpg";
import ShareBtn2 from '@/components/ShareBtns/ShareBtn2';

export default function Project({params}) {
    const {title} = params;
  return (
    <>
    <div id="ajax-page" className="ajax-page-content">
    <PerfectScrollbar component="div" className='ajax-page-wrapper'>
        <div className="ajax-page-nav">
            <div className="nav-item ajax-page-prev-next">
                <a className="ajax-page-load" href="portfolio-3.html"><i className="lnr lnr-chevron-left"></i></a>
                <a className="ajax-page-load" href="portfolio-2.html"><i className="lnr lnr-chevron-right"></i></a>
            </div>
            <div className="nav-item ajax-page-close-button">
                <a id="ajax-page-close-button" href="/projects"><i className="lnr lnr-cross"></i></a>
            </div>
        </div>

        <div className="ajax-page-title">
            <h1>{title}</h1>
        </div>

        <div className="row">
            <div className="col-sm-8 col-md-8 portfolio-block">
                <div className="owl-carousel portfolio-page-carousel">
                    <div className="item">
                        <Image src={Img1} alt="" />
                    </div>
                    <div className="item">
                        <Image src={Img1} alt="" />
                    </div>
                    <div className="item">
                        <Image src={Img1} alt="" />
                    </div>
                </div>

                <div className="portfolio-page-video embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/97102654?autoplay=0"></iframe>
                </div>

               
                   
                      {/* {  $('.portfolio-page-carousel').imagesLoaded(function(){
                            $('.portfolio-page-carousel').owlCarousel({
                                smartSpeed:1200,
                                items: 1,
                                loop: true,
                                dots: true,
                                nav: true,
                                navText: false,
                                margin: 10,
                                autoHeight:true
                            });
                        }) */}
             
            </div>

            <div className="col-sm-4 col-md-4 portfolio-block">
                {/* <!-- Project Description --> */}
                <div className="project-description">
                    <div className="block-title">
                        <h3>Description</h3>
                    </div>
                    <ul className="project-general-info">
                        <li><p><i className="fa fa-user"></i> Alex Smith</p></li>
                        <li><p><i className="fa fa-globe"></i> <a href="#" target="_blank">www.project-site.com</a></p></li>
                        <li><p><i className="fa fa-calendar"></i> 25 december, 2016</p></li>
                    </ul>

                    <p className="text-justify">Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    {/* <!-- /Project Description --> */}

                    {/* <!-- Technology --> */}
                    <div className="tags-block">
                        <div className="block-title">
                            <h3>Technology</h3>
                        </div>
                        <ul className="tags">
                            <li><a>HTML5</a></li>
                            <li><a>CSS3</a></li>
                            <li><a>jQuery</a></li>
                            <li><a>Ajax</a></li>
                            <li><a>PHP5</a></li>
                        </ul>
                    </div>
                    {/* <!-- /Technology --> */}
                    <ShareBtn2/>
                  
                </div>
                {/* <!-- Project Description --> */}
            </div>
        </div>
    </PerfectScrollbar>
</div>
    </>
  )
}

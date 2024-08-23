'use client';

import Image from 'next/image'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import ClientImg from '@/../../public/img/clients/client-1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Controller, Mousewheel, Navigation } from 'swiper/modules';


export default function About() {
  const Responsive = {
    0: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  };
  return (
    <PerfectScrollbar component="section" className='animated-section'>

      {/* <!-- About Me Subpage --> */}
      <div className="section-content">
        <div className="page-title">
          <h2>About <span>Me</span></h2>
        </div>

        {/* <!-- Personal Information --> */}
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <p>Experienced WordPress Developer with a versatile skill set, including
              WooCommerce, Elementor, Pro theme, and a range of other
              technologies. Demonstrated track record of delivering exceptional
              results across 70+ projects, ensuring client satisfaction through
              innovative and high-performance website solutions.
            </p>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Residence</span>
                  <span className="value">India</span>
                </li>
                <li>
                  <span className="title">e-mail</span>
                  <span className="value">mrdeepak.6897@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End of Personal Information --> */}

        <div className="white-space-50"></div>

        {/* <!-- Services --> */}
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>What <span>I Do</span></h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-store"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-laptop-phone"></i>
                  </div><div className="ci-text">
                    <h4>Web Design</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-pencil"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Copywriting</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-flag"></i>
                  </div><div className="ci-text">
                    <h4>Management</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Services --> */}

        <div className="white-space-50"></div>

        {/* <!-- Projects --> */}
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>Projects</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            {/* <OwlCarousel className='clients owl-carousel' nav items={5} navText={false} margin={10} responsive={Responsive}> */}
            <Swiper
              spaceBetween={0}
              slidesPerView={5}
              breakpoints={Responsive}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              mousewheel={true}
              navigation={true}
              controller={true}
              modules={[Autoplay, Controller, Mousewheel, Navigation]}
              className='clients owl-carousel'
            >
              <SwiperSlide className="client-block">

                <a href="#" target="_blank" title="Logo">
                  <Image src={ClientImg} alt="Logo" />
                </a>

              </SwiperSlide>


              <SwiperSlide className="client-block">

                <a href="#" target="_blank" title="Logo">
                  <Image src={ClientImg} alt="Logo" />
                </a>

              </SwiperSlide>

              <SwiperSlide className="client-block">

                <a href="#" target="_blank" title="Logo">
                  <Image src={ClientImg} alt="Logo" />
                </a>

              </SwiperSlide>

              <SwiperSlide className="client-block">


                <a href="#" target="_blank" title="Logo">
                  <Image src={ClientImg} alt="Logo" />
                </a>

              </SwiperSlide>

              <SwiperSlide className="client-block">

                <a href="#" target="_blank" title="Logo">
                  <Image src={ClientImg} alt="Logo" />
                </a>

              </SwiperSlide>

              <SwiperSlide className="client-block">

                <a href="#" target="_blank" title="Logo">
                  <Image src={ClientImg} alt="Logo" />
                </a>

              </SwiperSlide>

              <SwiperSlide className="client-block">

                <a href="#" target="_blank" title="Logo">
                  <Image src={ClientImg} alt="Logo" />
                </a>

              </SwiperSlide>
            </Swiper>

            {/* </OwlCarousel> */}
          </div>
        </div>
        {/* <!-- End of Projects --> */}

        <div className="white-space-50"></div>

        {/* <!-- Fun Facts --> */}
        <div className="row">
          <div className="col-xs-12 col-sm-12">

            <div className="block-title">
              <h3>Fun <span>Facts</span></h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-heart"></i>
              <h4>Happy Clients</h4>
              <span className="fun-fact-block-value">578</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-clock"></i>
              <h4>Working Hours</h4>
              <span className="fun-fact-block-value">4,780</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 ">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-star"></i>
              <h4>Awards Won</h4>
              <span className="fun-fact-block-value">15</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>
        </div>
        {/* <!-- End of Fun Facts --> */}

      </div>
      {/* <!-- End of About Me Subpage --> */}
    </PerfectScrollbar>
  )
}
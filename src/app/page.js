'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import {EffectFlip, Autoplay} from 'swiper/modules';


export default function Home() {
  return (
    <PerfectScrollbar component="section" className='animated-section start-page'>
      {/* <!-- Home page --> */}
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2>Deepak Kumar</h2>
              {/* <OwlCarousel className='owl-carousel text-rotation' loop items={1} center autoPlay autoplayTimeout={3800} animateOut='slideOutDown' animateIn='slideInDown' navText={false}>  */}
              <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFlip]}
              effect={'flip'}
              className='owl-carousel text-rotation'
            >
              {/* animated-section-scaleDown */}
             <SwiperSlide className="item">
                  <div className="sp-subtitle">Software Engineer</div>
                  </SwiperSlide>
                <SwiperSlide className="item">
                  <div className="sp-subtitle">Full Stack Developer</div>                
                </SwiperSlide>
            </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Homepage --> */}
    </PerfectScrollbar>
  );
}

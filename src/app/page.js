'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import dynamic from "next/dynamic"; 
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false, });
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
  return (
    <PerfectScrollbar component="section" className='animated-section start-page'>
      {/* <!-- Home page --> */}
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2>Deepak Kumar</h2>
              <OwlCarousel className='owl-carousel text-rotation' loop items={1} center autoPlay autoplayTimeout={3800} animateOut='slideOutDown' animateIn='slideInDown' navText={false}> 
              {/* animated-section-scaleDown */}
                <div className="item">
                  <div className="sp-subtitle">Software Engineer</div>
                </div>
                <div className="item">
                  <div className="sp-subtitle">Full Stack Developer</div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Homepage --> */}
    </PerfectScrollbar>
  );
}

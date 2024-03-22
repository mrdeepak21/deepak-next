'use client';
import Image from 'next/image';
import React, {useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ImgSrc from '@/../../public/img/portfolio/1.jpg';
import { motion, AnimatePresence  } from "framer-motion";



export default function Projects() {

  const data = [
    {
      id: 'soundcloud',
      category: 'SoundCloud',
      img: ImgSrc,
      title: 'SoundCloud Audio',
      link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&#038;color=%23ff5500&#038;auto_play=false&#038;hide_related=false&#038;show_comments=true&#038;show_user=true&#038;show_reposts=false&#038;show_teaser=true&#038;visual=true',
      icon_class: 'fa-volume-up',
      figure_class: 'lbaudio',
      link_class: 'mfp-iframe'
    },
    {
      id: 'soundcloud',
      category: 'SoundCloud',
      img: ImgSrc,
      title: 'SoundCloud Audio',
      link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&#038;color=%23ff5500&#038;auto_play=false&#038;hide_related=false&#038;show_comments=true&#038;show_user=true&#038;show_reposts=false&#038;show_teaser=true&#038;visual=true',
      icon_class: 'fa-volume-up',
      figure_class: 'lbaudio',
      link_class: 'mfp-iframe'
    },
    {
      category: 'Detailed',
      img: ImgSrc,
      title: 'Detailed Project',
      link: 'https://player.vimeo.com/video/158284739',
      icon_class: 'fa-video',
      figure_class: 'standard',
      link_class: 'mfp-iframe'
    },
    {
      category: 'Detailed',
      img: ImgSrc,
      title: 'Detailed Project',
      link: 'https://player.vimeo.com/video/158284739',
      icon_class: 'fa-video',
      figure_class: 'standard',
      link_class: 'mfp-iframe'
    },
  ];

  const filer = [...new Set(data.map(item => item.category))];
  
  const [filteredData, setfilteredData] = useState(data);


  const handleFilter = (item,e) => {
    Array.from(document.querySelectorAll('.portfolio-filters .active')).forEach((i)=>i.classList.remove('active'));
    item.target.parentElement.classList.add('active');
    e?setfilteredData(data.filter((item) => item.category == e)):setfilteredData(data);
  }

  return (
    <PerfectScrollbar component="section" className='animated-section'>
      {/* <!-- Portfolio Subpage --> */}
      <div className="section-content">
        <div className="page-title">
          <h2>Projetcs</h2>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            {/* <!-- Portfolio Content --> */}
            <div className="portfolio-content">

              <ul className="portfolio-filters">
                <li className='active'>
                  <a className="filter btn btn-sm btn-link" onClick={(e) => {handleFilter(e,'')}}>All</a>
                </li>
                {filer.map((item) => {
                  return (item && <li key={item}>
                    <a className={`filter btn btn-sm btn-link`} onClick={(e) => {handleFilter(e,item)}}>{item}</a>
                  </li>)
                })}
              </ul>

              {/* <!-- Portfolio Grid --> */}
              <div className="portfolio-grid three-columns">

                {filteredData.map((item, id) => {

                  return (item && <AnimatePresence key={item.link + id}>
                    <motion.figure className={`item ${item.figure_class}`} 
                    initial={{ opacity: 0, scale: 0.5 }} animate={{opacity: 1, scale:1 }} exit={{ opacity: 0}} transition={{ duration: 0.3 ,ease: "linear",}}
                    >
                      <div className="portfolio-item-img">
                        <Image src={item.img} alt={item.title} title={item.title} priority/>
                        <a href={item.link} className={`lightbox ${item.link_class}`} title={item.title} target="_blank"></a>
                      </div>
                      <i className={`fa ${item.icon_class}`}></i>
                      <h4 className="name">{item.title}</h4>
                      <span className="category">{item.category}</span>
                    </motion.figure>
                    </AnimatePresence>
                  )
                })}
              </div>
            </div>
            {/* <!-- End of Portfolio Content --> */}
          </div>
        </div>
      </div>
      {/* <!-- End of Portfolio Subpage --> */}
    </PerfectScrollbar>
  )
}

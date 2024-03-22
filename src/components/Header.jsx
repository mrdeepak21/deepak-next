'use client';
import Image from 'next/image'
import React from 'react'
import Navigation from './Navigation/Navigation';
import Socials from './Socials';
import Link from 'next/link';
import ProfileImg from '@/../../public/img/deepak.jpg'


export default function Header() {
  return (
    <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content">
              <div className="header-photo">
                <Image src={ProfileImg} alt='Deepak Kumar' priority/>
              </div>
              <div className="header-titles">
                <h1>Deepak Kumar</h1>
                <h4>Software Engineer</h4>
              </div>
            </div>

            <Navigation />

            <Socials />

            <div className="header-buttons">
              <Link href="/contact-me" className="btn btn-primary">Contact Me</Link>
            </div>

            <div className="copyrights">&copy; {new Date().getFullYear()} All rights reserved.</div>
          </header>
  )
}
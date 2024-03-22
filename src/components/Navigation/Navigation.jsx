'use client'

import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <ul className="main-menu">
              <li className="active">
                <Link href="/" className="nav-anim">
                  <span className="menu-icon lnr lnr-home"></span>
                  <span className="link-text">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about-me" className="nav-anim">
                  <span className="menu-icon lnr lnr-user"></span>
                  <span className="link-text">About Me</span>
                </Link>
              </li>
              <li>
                <Link href="/resume" className="nav-anim">
                  <span className="menu-icon lnr lnr-graduation-hat"></span>
                  <span className="link-text">Resume</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="nav-anim">
                  <span className="menu-icon lnr lnr-briefcase"></span>
                  <span className="link-text">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="nav-anim">
                  <span className="menu-icon lnr lnr-book"></span>
                  <span className="link-text">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-me" className="nav-anim">
                  <span className="menu-icon lnr lnr-envelope"></span>
                  <span className="link-text">Contact</span>
                </Link>
              </li>
            </ul>
  )
}

import Link from 'next/link'
import React from 'react'

export default function Socials() {
    return (
        <div className="social-links">
            <ul>
                <li><Link href="https://www.linkedin.com/in/deepak01/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                <li><Link href="https://github.com/mrdeepak21/" target="_blank"><i className="fab fa-github"></i></Link></li>
            </ul>
        </div>
    )
}
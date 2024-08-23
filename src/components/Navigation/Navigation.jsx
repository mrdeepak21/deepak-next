import Link from 'next/link'
import { usePathname} from 'next/navigation';
import React from 'react'
import links from '../Links';

export default function Navigation() {
  const path = usePathname();

  return (
    <ul className="main-menu">
      {links.map((linkItem)=>{
        return linkItem && <li key={linkItem.href}>
        <Link href={linkItem.href} className={`nav-anim ${path==linkItem.href?'active':''}`}>
          <span className={`menu-icon lnr ${linkItem.icon}`}></span>
          <span className="link-text">{linkItem.title}</span>
        </Link>
      </li>
      })}
            </ul>
  )
}

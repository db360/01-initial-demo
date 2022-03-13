import React from 'react'

import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink'

const menuItems = [
  {
      id: 1,
      text: 'Home',
      href: '/'
  },
  {
      id: 2,
      text: 'About',
      href: '/about'
  },
  {
      id: 3,
      text: 'Contact',
      href: '/contact'
  },
  {
      id: 4,
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
      <nav className={styles['menu-container']}>
        {
          menuItems.map(({ text, href, id}) => (
            <ActiveLink key={id} text={text} href={href}/>
          ))
        }
      </nav>
    )
}

export default Navbar
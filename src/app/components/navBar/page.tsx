import React from 'react';
import styles from './navBar.module.scss';
import Image from 'next/image';
import accountIcon from '../../../../public/images/account.svg';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <ul>
            <li><link href="" />Home</li>
            <li> <link href="" />About</li>
            <li> <link href="" />Contact</li>
            <li><link href="pages/profile" />Profile</li>
            <li> <Image src={accountIcon} alt="profile" className={styles.imageContainer} width={30} height={30}></Image></li>
        </ul>
    </nav>
  )
}

export default NavBar;
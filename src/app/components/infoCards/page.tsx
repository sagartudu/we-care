import React from 'react';
import styles from './infoCards.module.scss';
import Image from 'next/image';
import { InfoCardProps } from '@/app/modals/ICardData';

const InfoCards = ({image, title, info}: InfoCardProps) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
            <Image src={image} alt="icon-image" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>{info}</div>
    </div>
  )
}

export default InfoCards;
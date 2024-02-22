'use client';
import React from "react";
import styles from "./home.module.scss";
import bgImage from "../../../../public/images/home-bg.jpg";
import InfoCards from "@/app/components/infoCards/page";
import doctorIcon from "../../../../public/images/doctor.svg";
import nurseIcon from "../../../../public/images/nurse.svg";
import testIcon from "../../../../public/images/test.svg";
import { InfoCardProps } from "@/app/modals/ICardData";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  const cardsData: Array<InfoCardProps> = [
    {
      image: doctorIcon,
      title: "Consultancy",
      info: "Expert medical advice, anytime, anywhere. Personalized consultations for your convenience. Skip the wait, prioritize your health effortlessly.",
    },
    {
      image: nurseIcon,
      title: "Nursing",
      info: "Compassionate care, expertly delivered. From bedside assistance to specialized treatments, our nurses provide exceptional support for your health needs.",
    },
    {
      image: testIcon,
      title: "Lab Tests",
      info: "Accurate diagnostics, swift results. Our medical lab tests ensure precise analysis for informed healthcare decisions. Trust us for reliable testing solutions.",
    },
  ];

  return (
    <>
    <main className={styles.homeParent}>
      <section className={styles.titleContainer}>
        <div className={styles.siteName}>We Care</div>
        <div className={styles.subtitle}>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Empowering Health',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Enriching Lives',
        1000,
        'Your Trusted Healthcare Partner',
        10000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '45px', display: 'inline-block' }}
      repeat={Infinity}
    />
          {/* Empowering Health, Enriching Lives: Your Trusted Healthcare Partner */}
        </div>
      </section>
      <section className={styles.cardsContainer}>
        {cardsData?.map((item:InfoCardProps, index:number)=>(<InfoCards key={index} image={item?.image} title={item?.title} info={item?.info} />))}
      </section>
    </main>
    <div className={styles.backgroundColor}></div>
    </>
  );
};

export default HomePage;

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Nav} from './components/basic.js';
import Data from '../data/basic.json';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative} from "swiper";


import styles from '../styles/Home.module.css'
import "swiper/css";
import "swiper/css/effect-creative";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
				<div className={styles.hero}>
				<Nav/>
					<div className={styles.hero_container}>
						<Swiper
				centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
				effect={"creative"}
        creativeEffect={{
					prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        slidesPerView={1}
			  loop={true}
				grabCursor={true}
        spaceBetween={50}
        modules={[Autoplay, EffectCreative]}
        className={styles.swiper}
      >
        <SwiperSlide><img src="images/dark_hero.png"/></SwiperSlide>
							<SwiperSlide><img src="images/fruit_hero.png"/></SwiperSlide>
							<SwiperSlide><img src="images/vr_hero.png"/></SwiperSlide>
      </Swiper>
					<div className={styles.hero_info}>
						<small>Title</small>
						<h3>I am Full stack developer and Graphic designer from Bangladesh</h3>
						<p>I have worked as a mentor and a private tutor for computer science students and now I am working as a Freelancer on Fiverr, Upwork and many more</p>
						<small><img src="images/fiverr-logo.png"/>Fiverr</small>
						<small><img src="images/upwork-logo.png"/>Upwork</small>
					</div>
					</div>
				</div>
				<div className={styles.about_container}>
				<div className={styles.hero_info}>
						<small>About me</small>
						<h3>You need both talent and hard work to be successful in life</h3>
						<p>I mainly like to do frontend work and graphic designing. I have been using react for about more then a year and now I have started learning next js after seeing how many things it offers even this website is made by next js</p>
						<div className={styles.hero_year}>
							<h2>02</h2>
							<h4>Years of experience</h4>
						</div>
					</div>
				</div>
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Nav} from './components/basic.js';
import Data from '../data/basic.json';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import styles from '../styles/Home.module.css'
import "swiper/css";
import "swiper/css/pagination";

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
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide><Image src=""/></SwiperSlide>
      </Swiper>
						<h1>{Data[0].name}</h1>
					<div className={styles.hero_info}>
						<small>---Title---</small>
						<h3>I am Full stack developer and Graphic designer from Bangladesh</h3>
						<p>I have worked as a mentor and a private tutor for computer science students and now I am working as a Freelancer on Fiverr, Upwork and many more</p>
						<small>Fiverr</small>
						<small>Upwork</small>
					</div>
					</div>
				</div>
				<div className={styles.about_container}></div>
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Nav} from './components/basic.js';
import Data from '../data/basic.json';


import styles from '../styles/Home.module.css'

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

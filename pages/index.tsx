import type { NextPage } from 'next'
import Head from 'next/head'
import {Nav} from './components/basic.js';
import Data from '../data/basic.json';


import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.main}>
				<div className={styles.hero}>
				<Nav/>
					<div className={styles.hero_container}>
						<div className={styles.hero_text}><h1>{Data[0].name}</h1>
							<small>Connect with me on LinkedIn</small>
						</div>
					<div className={styles.hero_info}>
						<small>Title</small>
						<h3>{Data[0].work_title}</h3>
						<p>{Data[0].work}</p>
						<small><img src="images/fiverr-logo.png"/>Fiverr</small>
						<small><img src="images/upwork-logo.png"/>Upwork</small>
					</div>
					</div>
				</div>
				<div className={styles.about_container}>
				<div className={styles.hero_info}>
						<small>About me</small>
						<h3>{Data[0].about_title}</h3>
						<p>{Data[0].about}</p>
						<div className={styles.hero_year}>
							<h2>02</h2>
							<h4>Years of experience</h4>
						</div>
					</div>
					<div className={styles.contact}>
						<h2>{Data[0].contact_title}</h2>
						<p>{Data[0].contact}</p>
						<div className={styles.link}>
						<a href="#">nidalstar1000@gmail.com</a><i className="fi fi-rr-angle-right"></i>
						</div>	
					</div>
				</div>
				<div className={styles.certificate_container}>
					<div className={styles.certificate_info}>
						<h3>{Data[0].certificate}</h3>
						<p>{Data[0].certificate_info}</p>
					</div>
					<div className={styles.none}>
						<h1 id={styles.icon}>+</h1>
						<h1 id={styles.notice}>You don't have permission</h1>
					</div>
				</div>
      </main>
    </div>
  )
}

export default Home

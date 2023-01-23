import {Nav} from './components/basic.js';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative} from "swiper";

import games from '../styles/games.module.css'

export default function Games(){
   return( 
			 <div className={games.main}>
				 <Nav/>
				 <div className={games.body}>
				 <div className={games.banner}></div>
					 <div className={games.box_container}>
				 <div className={games.box}>
					 <img src=""/>
				 <div className={games.teraria}>
					 <h3>Teraria</h3>
					 <p style={{fontSize:"8px", bottom:"20px"}}>In order to play on our server first you need to download the same version of Teraria that the server has then you need to download Zero Tier from your IOS or Play store. Open your Zero Tier then paste the code below to connect to the server then open teraria and paste the server ID then play.</p>
					 <p><br/><a>Download Teraria</a><br/><a href="https://play.google.com/store/apps/details?id=com.zerotier.one">Download Zero Tier</a><br/>Zero Tier :8286ac0e4719038f<br/>Server id :172.25.142.73</p>
				 </div>
				 </div>
					 </div>
				 </div>
			 </div>
	 )
}

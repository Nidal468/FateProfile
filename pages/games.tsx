import type { NextPage } from 'next'

import {Nav} from './components/basic.js';

import games from '../styles/games.module.css'

import tofs from '../data/games.json';

const Games: NextPage = () => {
   return( 
			 <div className={games.main}>
				 <Nav border="1px solid #fff"/>
				 <div className={games.body}>
				 <img src="images/tof.jpg" className={games.banner}/>
					 <h2>Check out stuffs that I have made that aren't related to work</h2>
					 <div className={games.box_container}>
						  {tofs.map(tof => {
				return(
					<div className={games.box}> 
					 <img src={tof.img}/>
				 <div className={games.teraria}>
					 <h3>{tof.title}</h3>
					 <p style={{bottom:"20px"}}>{tof.info}</p>
					 <p><br/><a href={tof.link}>{tof.link_name}</a><br/><a href={tof.link1}>{tof.link_name1}</a><br/>{tof.address}<br/>{tof.id}</p>
				 </div>
					
				 </div>
							)
			 })}
				 
					 </div>
				 </div>
			 </div>
	 )
}
export default Games

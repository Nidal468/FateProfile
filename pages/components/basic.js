import {useState, useEffect} from 'react';
import Link from 'next/link';

import nav from '/styles/Nav.module.css'
import Data from '/data/basic.json';

export function Nav() {
	const [invisible, setInvisible] = useState(false);
	const [isMenu, setMenu] = useState(false)
	
	function Hamburger() {
		setMenu(current =>! current);
	};
   return(
		 <nav className={nav.nav_container}>
		 <h3>{Data[0].name}</h3>
			 <div className={nav.nav_options}>
			 <a href="#">Home</a>
			 <a href="#">About</a>
			 <a href="#">Designs</a>
			 <a href="#">Projects</a>
			 <a href="#">Gigs</a>
			 <a><Link href="/games">Games</Link></a>
			 </div>
			 <div className={nav.search}>
				<i className="fi fi-rr-search" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "none":"block"}}></i>
				<input type="text" placeholder="search" style={{"width":invisible? "100%":"0","opacity":invisible? "100%":"0"}} />
						<i className="fi fi-rr-angle-right" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "block":"none"}}></i>
					</div>
			 <div className={isMenu? nav.close:""}>
			 <span onClick={Hamburger}  className={nav.hamburger}></span>
				 </div>
		 </nav>
	 )
}

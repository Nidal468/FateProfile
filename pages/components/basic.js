import Link from 'next/link';
import {useState} from 'react';

import nav from '/styles/Nav.module.css'
import Data from '/data/basic.json';
import TextField  from '@mui/material/TextField';

export function Nav(props) {
	const [invisible, setInvisible] = useState(false);
	const [isMenu, setMenu] = useState(false)
	const position = isMenu? "block":"none";
	function Hamburger() {
		setMenu(current =>! current);
	};
   return(
		 <nav className={nav.nav_container} style={{borderBottom:props.border, color:props.color, position:props.position}}>
		 <h3>{Data[0].name}</h3>
			 <div className={nav.nav_options}>
			 <Link href="/">Home</Link>
			 <Link href="#">About</Link>
			 <Link href="/designs">Designs</Link>
			 <Link href="#">Projects</Link>
			 <Link href="#">Gigs</Link>
			 <Link href="/games">Games</Link>
			 </div>
			 <div className={nav.search}>
				<i className="fi fi-rr-search" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "none":"block"}}></i>
				<TextField id="outlined-basic" label="Search" variant="outlined" style={{"width":invisible? "100%":"0","opacity":invisible? "100%":"0"}} className={nav.textfield}/>
						<i className="fi fi-rr-angle-right" onClick={() => setInvisible(current =>! current)} style={{"display":invisible? "block":"none"}}></i>
					</div>
			 <div className={isMenu? nav.close:""}>
			 <span onClick={Hamburger}  className={nav.hamburger}></span>
				 </div>
			 <div className={nav.menu} style={{display:position}}>
				 <div className={nav.menu_body}>
					 <Link href="/">Home</Link>
					 <Link href="#">About</Link>
					 <Link href="/designs">Designs</Link>
					 <Link href="#">Projects</Link>
					 <Link href="#">Gigs</Link>
					 <Link href="/games">Games</Link>
				 </div>
		 </div>
		 </nav>
	 )
}
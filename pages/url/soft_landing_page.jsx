import {Nav} from '../components/basic.js';
import Button from '@mui/material/Button';
import soft from '/styles/soft_landing_page.module.css'
import firsts from '/data/landingpage.json';
import seconds from '/data/ecommerce.json';
import {useState} from 'react';

function Softs(){
	const [isDisplay, setIsDisplay] = useState(false);
	const [isFilter, setIsFilter] = useState(firsts);

	return(
		<div className={soft.main}>
			<Nav border="1px solid #fff" position="absolute"/>
			<div className={soft.hero}>
				<div>
				<h1>I will Build you a website for you or your business</h1>
				<p>My websites are Fast, Responsive, Modern and unique so users will have a pleasant experience.</p>
					<a href="#">Order Now<i className="fi fi-rr-caret-right"></i></a>
				</div>
						<img src="/images/dark_hero.png"/>
			</div>
			<svg id="svg" xmlns="http://www.w3.org/2000/svg">
					<path d="M 0,400 C 0,400 0,200 0,200 C 102.07655502392345,174.39234449760767 204.1531100478469,148.7846889952153 298,157 C 391.8468899521531,165.2153110047847 477.46411483253587,207.25358851674642 583,209 C 688.5358851674641,210.74641148325358 813.9904306220096,172.20095693779905 898,167 C 982.0095693779904,161.79904306220095 1024.5741626794259,189.94258373205741 1108,201 C 1191.4258373205741,212.05741626794259 1315.712918660287,206.0287081339713 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#3B30EC" fillOpacity="1" className={soft.path0} transform="rotate(-180 720 200)"></path>
				</svg>
			<h2>My top 3 Gigs</h2>
			<div className={soft.gig_container}>
				<div className={soft.gig}>
					<img src="/images/fiverr-logo.png"/>
					<div className={soft.gig_info}>
						<h3>I will build you a Next js website </h3>
						<p>I will design a responsive website for you be it a html, css and java script website or a React/Next JS website.</p>
					</div>
					<Button variant="contained">View</Button>
				</div>
				<div className={soft.gig}>
					<img src="/images/fiverr-logo.png"/>
					<div className={soft.gig_info}>
						<h3>I will build you a Next js website </h3>
						<p>I will design a responsive website for you be it a html, css and java script website or a React/Next JS website.</p>
					</div>
					<Button variant="contained">View</Button>
				</div>
				<div className={soft.gig}>
					<img src="/images/fiverr-logo.png"/>
					<div className={soft.gig_info}>
						<h3>I will build you a Next js website </h3>
						<p>I will design a responsive website for you be it a html, css and java script website or a React/Next JS website.</p>
					</div>
					<Button variant="contained">View</Button>
				</div>
			</div>
			<div className={soft.gig_list}>
				<div className={soft.filter_body}>
					<i className="fi fi-rr-filter" onClick={() => setIsDisplay(current =>! current)} style={{background: isDisplay? "#333" :"", color:isDisplay? "#fff" :""}}></i>
					<h2>Use the filter to navigate through my gigs</h2>
				</div>
				<div className={soft.filter} style={{display:isDisplay? "flex":"none"}}>
					<span><input type="radio" name="filter" onClick={() => setIsFilter(firsts)} defaultChecked/><label>Landing page</label></span>
					<span><input type="radio" name="filter" onClick={() => setIsFilter(seconds)} /><label>E commerce website</label></span>
					<span><input type="radio" name="filter"/><label>Business card</label></span>
					<span><input type="radio" name="filter"/><label>Wordpress</label></span>
					<span><input type="radio" name="filter"/><label>Web design</label></span>
					<span><input type="radio" name="filter"/><label>Graphic design</label></span>
				</div>
				{isFilter.map(filter => {
			return(
			<div className={soft.items_container} key={filter.id}>
					<div className={soft.items_body}>
						<div className={soft.items}>
							<img src={filter.image} />
							<div className={soft.items_info}>
								<div className={soft.items_offer}>
									<span>Basic</span>
									<span>Standard</span>
									<span>Premium</span>
								</div>
								<div className={soft.items_offer_text}>
									<h4>{filter.name}</h4>
									<p>{filter.info}</p>
									<div id={soft.list}>
										<span><h6>{filter.item_1_name}</h6><p>{filter.item_1_info}</p></span>
										<span><h6>{filter.item_2_name}</h6><p>{filter.item_2_info}</p></span>
										<span><h6>{filter.item_3_name}</h6><p>{filter.item_3_info}</p></span>
										<span><h6>{filter.item_4_name}</h6><p>{filter.item_4_info}</p></span>
									</div>
									<Button variant="contained" href={filter.link}>View</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				) 
				})};
			</div>
		</div>
	)
};
export default Softs
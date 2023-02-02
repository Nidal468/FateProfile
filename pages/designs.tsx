import type{NextPage} from 'next';

import {Nav} from './components/basic.js';

import design from '../data/design.json';

import gallery from '../styles/gallery.module.css'


const designs: NextPage = () =>{
	return(
		<div className={gallery.main}>
			<Nav/>
			<div className={gallery.hero}>
			{design.map(project => {
				return(
					
				<div className={gallery.image} key={project.id}>
					<a href={project.link} className={gallery.link}>
					<div className={gallery.image_box}>
						<img src={project.image}/>
						<div className={gallery.image_flex}>
						<img src={project.image}/>
						<img src={project.image}/>
						</div>
					</div></a>
				</div>
				)
			})}
			</div>
		</div>
	)
};

export default designs;

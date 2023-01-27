import type{NextPage} from 'next';

import {Nav, Member} from './components/basic.js';
import Image from 'next/image';

import design from '../data/design.json';

import gallery from '../styles/gallery.module.css'


const designs: NextPage = () =>{
	return(
		<div className={gallery.main}>
			<Nav/>
			<div className={gallery.hero}>
			{design.map(project => {
				return(
				<div className={gallery.image}>
					<div className={gallery.image_box}>
						<img src={project.image}/>
						<div className={gallery.image_flex}>
						<img src={project.image}/>
						<img src={project.image}/>
						</div>
					</div>
				</div>
				)
			})}
			</div>
		</div>
	)
};

export default designs;

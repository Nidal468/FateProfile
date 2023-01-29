import type{NextPage} from 'next';

import {Nav} from '../components/basic.js';
import Image from 'next/image';

import page from '../data/page.json';

import soft from '/styles/soft_landing_page.module.css'

const softs: NextPage = () =>{
	return(
		<div className={soft.main}>
			<Nav/>
			<div className={soft.hero}>
				<svg id="svg" viewBox="300 0 1440 590" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
							<stop offset="5%" stop-color="#F78DA7"></stop>
							<stop offset="95%" stop-color="#8ED1FC"></stop>
						</linearGradient>
					</defs>
					<path d="M 0,600 C 0,600 0,150 0,150 C 71.16746411483251,120.99521531100478 142.33492822966502,91.99043062200958 253,97 C 363.665071770335,102.00956937799042 513.8277511961722,141.03349282296648 621,167 C 728.1722488038278,192.96650717703352 792.3540669856459,205.8755980861244 885,204 C 977.6459330143541,202.1244019138756 1098.7559808612439,185.4641148325359 1196,174 C 1293.2440191387561,162.5358851674641 1366.622009569378,156.26794258373207 1440,150 C 1440,150 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" className={soft.path0} transform="rotate(-180 720 300)"></path>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop>
						</linearGradient>
					</defs>
					<path d="M 0,600 C 0,600 0,300 0,300 C 88.2870813397129,286.9569377990431 176.5741626794258,273.9138755980861 273,290 C 369.4258373205742,306.0861244019139 473.9904306220096,351.30143540669854 574,351 C 674.0095693779904,350.69856459330146 769.4641148325359,304.88038277511953 867,280 C 964.5358851674641,255.11961722488044 1064.153110047847,251.177033492823 1160,258 C 1255.846889952153,264.822966507177 1347.9234449760766,282.4114832535885 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" className={soft.path1} transform="rotate(-180 720 300)"></path>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
							<stop offset="5%" stop-color="#F78DA7"></stop>
							<stop offset="95%" stop-color="#8ED1FC"></stop>
						</linearGradient>
					</defs>
					<path d="M 0,600 C 0,600 0,450 0,450 C 126.59330143540669,432.43062200956933 253.18660287081337,414.8612440191387 337,431 C 420.8133971291866,447.1387559808613 461.8468899521531,496.9856459330144 552,495 C 642.1531100478469,493.0143540669856 781.4258373205741,439.19617224880386 895,417 C 1008.5741626794259,394.80382775119614 1096.4497607655503,404.2296650717704 1183,415 C 1269.5502392344497,425.7703349282296 1354.7751196172248,437.88516746411483 1440,450 C 1440,450 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className={soft.path2} transform="rotate(-180 720 300)"></path></svg>
		</div>
		</div>
	)
};

export default softs;
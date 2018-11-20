import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import HiMyNameIs from '../svg/HiMyNameIs.js';
import BillPearce from '../svg/BillPearce.js';
import AndIMake from '../svg/AndIMake.js';
import InternetStuff from '../svg/InternetStuff.js';

const Splash = () => (
	<splash class={style.splash}>
		<HiMyNameIs class={style.hi_my_name_is} />
		<BillPearce class={style.bill_pearce} />
		<AndIMake class={style.and_i_make} />
		<InternetStuff class={style.internet_stuff} />
	</splash>
);

export default Splash;

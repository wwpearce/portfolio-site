import { h } from 'preact';
import style from './style';

import DesktopLayout from '../svg/DesktopLayout.js'

const Splash = () => (
	<splash class={style.splash}>
		<DesktopLayout class={style.DesktopLayout} />
	</splash>
);

export default Splash;

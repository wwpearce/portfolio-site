import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Button = () => (
	<button class={style.button}>
		<Link activeClassName={style.active} href="/">menu</Link>
	</button>
);

export default Button;

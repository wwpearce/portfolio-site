import {
  h,
  Component
} from 'preact';
import style from './style';

import DesktopLayout from './svg/DesktopLayout.js'

export default class Splash extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  render() {
    return (
			<splash class={style.splash}>
				<DesktopLayout class={style.DesktopLayout} />
			</splash>
    );
  }
}

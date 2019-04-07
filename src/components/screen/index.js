import {
  h,
  Component
} from 'preact';
import style from './style';

import DesktopLayout from '../svg/DesktopLayout.js'

export default class Screen extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  render() {
    return (
			<screen class={style.screen}>
				<DesktopLayout class={style.DesktopLayout} />
			</screen>
    );
  }
}

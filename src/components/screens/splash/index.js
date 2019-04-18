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
    const $splashClasses = `${style.splash} screen`;
    return (
			<splash onClick = {this.props.changeColors} className={$splashClasses}>
				<DesktopLayout className={style.DesktopLayout} />
			</splash>
    );
  }
}

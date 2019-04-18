import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Hamburger extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  render() {
    const getBurgerActivity = (this.props.state.state === 'default') ? '' : ' is-active';
    const hamburgerActualClasses = 'hamburgerActual' + getBurgerActivity;

    return (
			<hamburger onClick = {this.props.handleHamburgerClick} id = 'hamburger' class = {style.hamburger} >
        <div id="hamburgerActual" class={hamburgerActualClasses}></div>
      </hamburger>
    );
  }
}

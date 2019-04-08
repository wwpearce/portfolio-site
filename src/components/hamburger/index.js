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
    return (
			<hamburger onClick = {this.props.handleScroll} id = 'hamburger' class = {style.hamburger} >
        <div id="hamburgerActual" class="hamburgerActual"></div>
      </hamburger>
    );
  }
}

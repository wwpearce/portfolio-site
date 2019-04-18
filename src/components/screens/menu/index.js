import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Menu extends Component {

  constructor(props) {
    super(props)
  };

  handleMenuLinkClick = (e) => {
    e.preventDefault();
    this.props.changeScrollPosition(e.target.id, 1, null);
  };

  componentDidMount() {
    this.$menuLinkElms = document.querySelectorAll('a.menu-link');
    this.props.addListeners(this.$menuLinkElms, 'click', this.handleMenuLinkClick);
  };

  componentWillUnmount() {
    this.props.removeListeners(this.$menuLinkElms);
  };

  render() {
    return (
			<menu class={`${style.menu} screen`}>
        <ul>
          <li>
            <a id='about' class='menu-link'>
              <h2>about</h2>
            </a>
          </li>
          <li>
            <a id='work' class='menu-link'>
              <h2>work</h2>
            </a>
          </li>
          <li>
            <a id='contact' class='menu-link'>
              <h2>contact me</h2>
            </a>
          </li>
        </ul>
			</menu>
    );
  }
}

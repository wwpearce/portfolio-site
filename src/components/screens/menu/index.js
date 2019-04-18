import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Menu extends Component {

  constructor(props) {
    super(props)
  };

  addListeners = () => {
    let linkArray = document.querySelectorAll('a.menu-link');
    for (let i = 0; i < linkArray.length; i++) {
      linkArray[i].addEventListener('click', this.doLinkClick, false);
    }
	};

  removeListeners = () => {
    let linkArray = document.querySelectorAll('a.menu-link');
    for (let i = 0; i < linkArray.length; i++) {
      linkArray[i].removeEventListener('click', this.doLinkClick, false);
    }
  };

  doLinkClick = (e) => {
    e.preventDefault();
    this.props.changeScrollPosition(e.target.id, 1, null);
  };

  componentDidMount() {
    this.addListeners();
  };

  componentWillUnmount() {
    this.removeListeners();
  };

  render() {
    const $menuClasses = `${style.menu} screen`;
    const $visibility = this.props.returnMenuState;

    return (
			<menu visibility={$visibility} class={$menuClasses}>
      <ul>
        <li>
          <a id='about' class='menu-link'>
            <h2>about me</h2>
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

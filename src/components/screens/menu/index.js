import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Screen extends Component {

  constructor(props) {
    super(props)
  };

  addListeners = () => {
    const linkArray = document.querySelectorAll('a.menu-link');

    for (let i = 0; i < linkArray.length; i++) {
      linkArray[i].addEventListener('click', this.doLinkClick, false);
    }
	};

  doLinkClick = (e) => {
    console.log(e.target.id);
  };

  componentDidMount() {
    this.addListeners();
  };

  render() {
    return (
			<menu class={style.menu}>
      <ul>
        <li>
          <a id='about-me' class='menu-link'>about me</a>
        </li>
        <li>
          <a id='work' class='menu-link'>work</a>
        </li>
        <li>
          <a id='contact-me' class='menu-link'>contact me</a>
        </li>
      </ul>

			</menu>
    );
  }
}

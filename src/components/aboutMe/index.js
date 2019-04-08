import {
  h,
  Component
} from 'preact';
import style from './style';

export default class AboutMe extends Component {

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
			<aboutMe class={style.aboutMe}>
      <h1>hi</h1>

			</aboutMe>
    );
  }
}

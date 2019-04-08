import {
  h,
  Component
} from 'preact';
import style from './style';

export default class About extends Component {

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
			<about class={style.about}>
      <h1>hi</h1>

			</about>
    );
  }
}

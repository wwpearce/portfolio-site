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
	};


  componentDidMount() {
    this.addListeners();
  };

  render() {
    const $aboutClasses = `${style.about} screen`;
    return (
			<about className={$aboutClasses}>
        <div class="headline-wrapper">
          <h1>about me</h1>
        </div>
        <div class="inner_content-wrapper">
          <div class="inner_content-wrapper_left">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          </div>
          <div class="inner_content-wrapper_right">
            <div class="inner_content-wrapper_right_images"></div>
            <div class="inner_content-wrapper_right-tags"></div>
          </div>
        </div>
			</about>
    );
  }
}

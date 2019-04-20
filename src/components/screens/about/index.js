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
          <h1>{this.props.content.headline}</h1>
          <h3>(AKA WTF is a Creative Technologist)</h3>
        </div>
        <div class="inner_content-wrapper">
          <div class="inner_content-wrapper_left">
            <p>{this.props.content.bodyCopy}</p>
          </div>
          <div class="inner_content-wrapper_right">
            <div class="inner_content-wrapper_right_images">
              <img src={this.props.image} />
            </div>
            <div class="inner_content-wrapper_right-tags"></div>
          </div>
        </div>
			</about>
    );
  }
}

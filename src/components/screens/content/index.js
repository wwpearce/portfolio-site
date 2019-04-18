import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Content extends Component {

  constructor(props) {
    super(props)
  };

  content;

  addRefs = () => {
    this.$content = document.querySelector('content');
  };

  addListeners = () => {
    this.$content.addEventListener('click', this.doContentClick, false);
	};

  removeListeners = () => {
    this.$content.removeEventListener('click', this.doContentClick);
  };

  doContentClick = () => {
    this.props.toggleState('content');
  };

  componentDidMount() {
    this.addRefs();
    // this.addListeners();
  };

  componentWillUnmount() {
    this.removeListeners();
  };

  render() {
    const $contentClasses = `${style.content} screen`;
    const $visibility = this.props.returnMenuState;

    return (
			<content class={$contentClasses}>
			</content>
    );
  }
}

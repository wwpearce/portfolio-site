import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Content extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  render() {
    const $contentClasses = `${style.content} screen`;

    return (
			<content class={$contentClasses}>
			</content>
    );
  }
}

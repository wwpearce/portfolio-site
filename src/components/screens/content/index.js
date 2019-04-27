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
    console.log(this.props);
  };

  componentWillUnmount() {
  };

  render() {
    const $contentClasses = `${style.content} screen`;

    return (
			<content class={$contentClasses}>
        <h1>{this.props.state.activeContent}</h1>
			</content>
    );
  }
}

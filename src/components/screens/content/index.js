import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Content extends Component {

  constructor(props) {
    super(props)
    console.log("sup");
  };

  componentDidMount() {
    console.log(this.props);
  };

  componentWillUnmount() {
  };

  render() {
    const $contentClasses = `${style.content} ${this.props.state.activeContent} screen`;
    let content = this.props.getContentFromShortName(this.props.state.activeContentName);

    return (
			<content class={$contentClasses}>
        <h1>{content.fullName}</h1>
        <p>{content.bodyCopy}</p>
			</content>
    );
  }
}

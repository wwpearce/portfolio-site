import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Button extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  render() {
    return (
			<button onClick = {this.props.handleScrollButtonClick} id = 'scrollButton' class = {style.scroll} >scroooooool!</button>
    );
  }
}

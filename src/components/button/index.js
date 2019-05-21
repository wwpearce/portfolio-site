import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Button extends Component {

  constructor(props) {
    super(props)
    this.arrowDirection = this.props.direction;
  };

  getArrowDirection = () =>{
    if (this.props.direction === 'up') {
      return style.arrowUp
    }
    if (this.props.direction === 'down') {
      return style.arrowDown
    }
  };

  componentDidMount() {
  };

  render() {
    return (
			<button onClick = {this.props.onButtonClick} id = 'scrollButton' className = {style.scroll} >
      <div class='buttonText'>{this.props.text}</div>
      <div className={this.getArrowDirection()}></div>
      </button>
    );
  }
}

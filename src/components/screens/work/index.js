import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Work extends Component {

  constructor(props) {
    super(props)
  };

  handleLinkeClick = (e) => {
    this.props.toggleState('content');
  };

  generateGridItems = (number) => {
    let gridItems = [];
    for (let i = 0; i < number; i++) {
      gridItems.push(<div className="grid-item" key={i}></div>);
    }
    return gridItems;
  };

  componentDidMount() {
    this.grid_items = document.querySelectorAll('div.grid-item');
    this.props.addListeners(this.grid_items, 'click', this.handleLinkeClick);
  };

  componentWillUnmount() {
    this.props.removeListeners(this.grid_items, 'click', this.handleLinkeClick);
  };

  render() {
    const $workClasses = `${style.work} screen`;
    return (
			<work className={$workClasses}>
        <div class="headline-wrapper">
          <h1>Work</h1>
        </div>
        <div class="inner_content-wrapper">
            {this.generateGridItems(16)}
        </div>
			</work>
    );
  }
}

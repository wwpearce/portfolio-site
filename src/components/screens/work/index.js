import {
  h,
  Component
} from 'preact';
import style from './style';
import Tagging from './tagging';

export default class Work extends Component {

  constructor(props) {
    super(props)
  };

  handleLinkClick = (e) => {
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
    this.props.addListeners(this.grid_items, 'click', this.handleLinkClick);
  };

  componentWillUnmount() {
    this.props.removeListeners(this.grid_items, 'click', this.handleLinkClick);
  };

  render() {
    return (
			<work className={`${style.work} screen`}>
        <div class="headline-wrapper">
          <h1>Work</h1>
        </div>
        <div class={style.taggingWrapper}>
          <Tagging state={this.props.state} changeDropdownState={this.props.changeDropdownState} content={this.props.content.tags} / >
        </div>
        <div class={style.inner_contentWrapper}>
            {this.generateGridItems(16)}
        </div>
			</work>
    );
  }
}

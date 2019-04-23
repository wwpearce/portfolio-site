import {
  h,
  Component
} from 'preact';
import style from './style';
import Tagging from './tagging';

export default class Work extends Component {

  constructor(props) {
    super(props)
    this.numberOfGridItems = this.props.state.filters.length < 1 ? this.props.state.dropdownOptions.length : this.props.state.filters.length;

  };

  handleLinkClick = (e) => {
    this.props.toggleState('content');
  };

  setOrUnsetTag = (tag, setOrUnset) => {
    let dropDownArray = this.props.state.dropdownOptions;
    let filtersArray = this.props.state.filters;

    if (setOrUnset === 'set') {
      dropDownArray.splice(dropDownArray.indexOf(tag), 1);
      filtersArray.push(tag);
    }
    else if (setOrUnset === 'unset') {
      filtersArray.splice(dropDownArray.indexOf(tag), 1);
      dropDownArray.push(tag);
    }

    this.setState({
      dropDownOptions: dropDownArray,
      filters: filtersArray
    });

    // console.log(setOrUnset, this.props.state);
  };

  generateGridItems = () => {
    let number;
    let array;
    if(this.props.state.filters.length < 1) {
      console.log("Display these projects: " + this.props.state.dropdownOptions);
      number = this.props.state.dropdownOptions.length;
      array = this.props.state.dropdownOptions;
    }
    else if(this.props.state.filters.length > 0){
      console.log("Display these projects (filtered): " + this.props.state.filters);
      number = this.props.state.filters.length;
      array = this.props.state.filters;
    }
    this.filterProjects(array);

    let gridItems = [];
    for (let i = 0; i < number; i++) {
      gridItems.push(<div className="grid-item" key={i}></div>);
    }
    return gridItems;
  };

  filterProjects = (array) => {
    for (let i = 0; i < this.props.content.projects.length; i++) {
      let intersection = this.props.content.projects[i].tags.filter(x => array.includes(x));
      console.log(intersection);
    }
  };

  componentDidMount() {
    this.grid_items = document.querySelectorAll('div.grid-item');
    this.props.addListeners(this.grid_items, 'click', this.handleLinkClick);


    console.log(this.numberOfGridItems);

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
          <Tagging setOrUnsetTag={this.setOrUnsetTag} state={this.props.state} normalizeString={this.props.normalizeString} setState={this.props.setState} changeDropdownState={this.props.changeDropdownState} content={this.props.content.tags} / >
        </div>
        <div class={style.inner_contentWrapper}>
            {this.generateGridItems()}
        </div>
			</work>
    );
  }
}

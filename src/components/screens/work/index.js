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
    console.log(e.target.id);
    this.props.toggleState('content');
    this.props.setContentState(e.target.id);
  };

  setOrUnsetTag = (tag, setOrUnset) => {
    let dropDownArray = this.props.state.dropdownOptions;
    let filtersArray = this.props.state.filters;
    if (setOrUnset === 'set') {
      dropDownArray.splice(dropDownArray.indexOf(tag), 1);
      filtersArray.push(tag);
    }
    if (setOrUnset === 'unset') {
      filtersArray.splice(filtersArray.indexOf(tag), 1);
      dropDownArray.push(tag);
    }
    dropDownArray.sort();
    filtersArray.sort();
    // console.log(`***** \n ${setOrUnset}ting tag: ${tag} \n dropDownArray: ${dropDownArray} \n filtersArray: ${filtersArray} \n*****`);
    this.setState({
      dropDownOptions: dropDownArray,
      filters: filtersArray
    });
    // console.log("Dropdown Options State: \n" + this.props.state.dropdownOptions);
    // console.log("Filters State: \n" + this.props.state.filters);
  };

  generateGridItems = () => {
    let array;
    if(this.props.state.filters.length <= 0) {
      // console.log("Display these projects (unfiltered): " + this.props.state.dropdownOptions);
      array = this.props.content.projects;
    }
    else {
      // console.log("Display these projects (filtered): " + this.props.state.filters);
      array = this.filterProjects(this.props.state.filters);
    }

    let gridItems = [];
    for (let i = 0; i < array.length; i++) {
      // console.log(array[i]);
      gridItems.push(
        <div onClick = {this.handleLinkClick} className={array[i].name + " grid-item"} id={array[i].name}>
        <h3>{array[i].fullName}</h3>
        </div>
      );
    }
    return gridItems;
  };

  filterProjects = (array) => {
    let output = [];
    for (let i = 0; i < this.props.content.projects.length; i++) {
      let intersection = this.props.content.projects[i].tags.filter(x => array.includes(x));
      if (this.props.arraysEqual(intersection, this.props.state.filters)) {
        // console.log("Adding the following project: " + this.props.content.projects[i].fullName);
        output.push(this.props.content.projects[i]);
      }
    }
    return output;
  };

  componentDidMount() {
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

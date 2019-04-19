import {
  h,
  Component
} from 'preact';
import style from './style';
import Dropdown from './dropdown';

export default class Tagging extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.$tags = document.querySelector('.tags');
  };

  generateDropdownOptions = () => {
    this.dropdownOptions = [];
    for (let i = 0; i < this.props.state.dropdownOptions.length; i++) {
      this.dropdownOptions.push(<option value={this.props.state.dropdownOptions[i]}>{this.props.state.dropdownOptions[i]}</option>)
    }
    return this.dropdownOptions;
  };

  addTags = (tag) => {
    let _changeDropdownState = this.props.changeDropdownState;
    let _dropdownOptions = this.props.state.dropdownOptions;
    let tagStringLength = tag.length;
    let tagLength = tagStringLength * 10 > 50 ? tagStringLength * 10 : 50;
    let tagHeight = 30;
    console.log(this.tagStringLength);
    this.$div = document.createElement('div');
    this.$div.className = `${tag} tag`;
    this.$div.innerHTML = `
    <pre height=${tagHeight}px width=${tagLength}px>${tag}</pre>
    <svg height=${tagHeight}px width=${tagLength}px>
      <path d="M10 0 L 0 ${tagHeight / 2} L 10 ${tagHeight} H ${tagLength} L ${tagLength - 10} ${tagHeight / 2} L ${tagLength} 0 Z"/>
    </svg>
    `;
    this.$div.onclick = function() {
      let tmpArray = _dropdownOptions;
      tmpArray.push(tag)
      _changeDropdownState(_dropdownOptions);
      this.parentElement.removeChild(this);
    };
    this.$tags.appendChild(this.$div)
  };

  removeTagFromDropdowns = (tag) => {
    this.tmpDropdownArray = this.props.state.dropdownOptions;
    this.tmpDropdownArray.splice( this.tmpDropdownArray.indexOf(tag), 1 );
    let foo = this.tmpDropdownArray;
    this.props.changeDropdownState(foo);
  };

  handleTagUpdate = (tag) => {
    if (tag == '*******') {
      return false;
    }
    this.addTags(tag);
    this.removeTagFromDropdowns(tag);
  };

  render() {

    return (
			<tagging class = {style.tagging} >
        <Dropdown state={this.props.state} changeDropdownState={this.props.changeDropdownState} generateDropdownOptions={this.generateDropdownOptions} dropdownOptions={this.dropdownOptions} handleTagUpdate={this.handleTagUpdate} content={this.props.content} / >
        <div class="tags"></div>
      </tagging>
    );
  }
}

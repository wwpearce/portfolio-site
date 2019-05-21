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
      this.dropdownOptions.push(
        <option value={this.props.state.dropdownOptions[i]}>{this.props.normalizeString(this.props.state.dropdownOptions[i])}</option>
      )
    }
    return this.dropdownOptions;
  };

  addTags = (tag) => {
    let tagStringLength = tag.length;
    let tagLength = tagStringLength * 10 > 50 ? tagStringLength * 10 : 50;
    let tagHeight = 30;
    let _setOrUnsetTag = this.props.setOrUnsetTag;
    this.$div = document.createElement('div');
    this.$div.className = `${tag} tag`;
    this.$div.innerHTML = `
    <div >
      <div class="xtag"></div>
      ${this.props.normalizeString(tag)}
    </div>
    `;
    this.$div.onclick = function() {
      _setOrUnsetTag(tag, 'unset');
      this.parentElement.removeChild(this);
    };
    this.$tags.appendChild(this.$div);
  };

  addTagCopy = "add tag";

  handleTagUpdate = (tag) => {
    if (tag == this.addTagCopy) {
      return false;
    }
    if (tag === 'clear tags') {
      console.log("reset tags");
      return false;
    }
    this.addTags(tag);
    this.props.setOrUnsetTag(tag, 'set');
  };

  render() {
    return (
			<tagging class = {style.tagging} >
        <Dropdown state={this.props.state} addTagCopy={this.addTagCopy} changeDropdownState={this.props.changeDropdownState} generateDropdownOptions={this.generateDropdownOptions} dropdownOptions={this.dropdownOptions} handleTagUpdate={this.handleTagUpdate} content={this.props.content} / >
        <div class="tags"></div>
      </tagging>
    );
  }
}

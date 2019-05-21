import {
  h,
  Component
} from 'preact';
import style from './style';

export default class Dropdown extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  handleSelectChange = (e) => {
    this.props.handleTagUpdate(e.target.value);
  }

  render() {
    return (
			<dropdown class = {style.dropdown} >
      <select onChange = {this.handleSelectChange}>
        {this.props.generateDropdownOptions()}
        <option selected>{this.props.addTagCopy}</option>
        <option>clear tags</option>
      </select>
      </dropdown>
    );
  }
}

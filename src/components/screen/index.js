import {
  h,
  Component
} from 'preact';
import style from './style';

import Splash from '../screens/splash';
import Menu from '../screens/menu';
import About from '../screens/about';

export default class Screen extends Component {

  constructor(props, state) {
    super(props)
  };

  componentDidMount() {
    console.log("I'm the screen", this.props.state );
    const $state = this.props.state;
  };


  processState = () => {
    switch(this.props.state) {
      case 'splash': {
        return <Splash class={style.Splash} />;
        break;
      }
      case 'menu': {
        return <Menu class={style.Menu} />;
        break;
      }
      default: {
        break;
      }
    };

  };

  render() {
    return (
				{this.props.processState}
    );
  }
}

import {
  h,
  Component
} from 'preact';
import {TweenMax, TimelineMax} from "gsap/all";

import style from './style';

import Svg from './svg/Svg.js';

export default class Splash extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
    // window.scrollTo(0,1); // we'll need this for mobile safari later
    let speed = '8';
    let timeline = new TimelineMax({repeat:-1});

    timeline.fromTo('#zigzag1', speed, {x:'0%'}, {x:'100%', ease:Linear.easeNone}, 'playTogether');
    timeline.fromTo('#zigzag2', speed, {x:'-100%'}, {x:'0%', ease:Linear.easeNone}, 'playTogether');
  };

  render() {
    const $splashClasses = `${style.splash} screen`;
    return (
			<splash onClick = {this.props.changeColors} className={$splashClasses}>
        <Svg / >
			</splash>
    );
  }
}

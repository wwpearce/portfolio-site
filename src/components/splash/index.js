import {h, Component} from 'preact';
import {TweenMax, TimelineMax, ScrollToPlugin} from "gsap/all";
import Plx from 'react-plx';

import style from './style';
import Button from '../button';

import Svg from './svg/Svg.js';

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: 'scale'
      }
    ]
  }
];

export default class Splash extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
    let speed = '8';
    let timeline = new TimelineMax({repeat: -1});

    timeline.fromTo('#zigzag1', speed, {
      x: '0%'
    }, {
      x: '100%',
      ease: Linear.easeNone
    }, 'playTogether');
    timeline.fromTo('#zigzag2', speed, {
      x: '-100%'
    }, {
      x: '0%',
      ease: Linear.easeNone
    }, 'playTogether');
  };

  render() {
    const $splashClasses = `${style.splash} screen`;
    return (<splash className={$splashClasses}>
      <Plx parallaxData={parallaxData}>
        <Svg onClick={this.props.changeColors}/>
      </Plx>
      <Button text='hi! how are you?' onButtonClick={() => this.props.changeScrollPosition('about')} direction='down'/>
    </splash>
    );
  }
}

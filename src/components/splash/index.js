import {h, Component} from 'preact';
import {TweenMax, TimelineMax, ScrollToPlugin} from "gsap/all";
import Plx from 'react-plx';
import Sticky from 'react-stickynode';

import style from './style';
import Button from '../button';

import SvgTop from './svg/SvgTop.js';
import SvgMiddle from './svg/SvgMiddle.js';
import SvgBottom from './svg/SvgBottom.js';

const parallaxDataTop = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'translateX',
      },
    ]
  }
];
const parallaxDataMiddle = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'translateX',
      },
    ]
  }
];
const parallaxDataBottom = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'translateX',
      },
    ]
  }
];
const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: 'scale'
      },
    ]
  }
];

const parallaxDataButton = [
  {
    start: 'splash',
    end: 'about',
    properties: [
      {
        startValue: 0,
        endValue: 1000,
         property: 'translateY',

      },
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
    return (
    <splash className={$splashClasses}>
      <Plx parallaxData={parallaxData}>
        <Plx parallaxData={parallaxDataTop}>
          <SvgTop/>
        </Plx>
        <Plx parallaxData={parallaxDataMiddle}>
          <SvgMiddle/>
        </Plx>
        <Plx parallaxData={parallaxDataBottom}>
          <SvgBottom/>
        </Plx>
      </Plx>
        <Button text='hi! how are you?' name="goToAbout" onButtonClick={() => this.props.changeScrollPosition('about')} direction='down'/>
    </splash>
    );
  }
}

import {h, Component} from 'preact';
import Plx from 'react-plx';

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
    start: 'self',
    end: 'about',
    properties: [
      {
        startValue: 0,
        endValue: 500,
         property: 'translateY',

      },
    ]
  }
];

export default class Splash extends Component {
  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick = (e) => {
    let contours = document.querySelectorAll('.ContoursMiddle');
    for(let i = 0; i < contours.length; i++) {
      if(contours[i].style.animationPlayState == 'running') {
        contours[i].style.animationPlayState = 'paused';
      }
      else {
        contours[i].style.animationPlayState = 'running';
      }
    }
  };

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  render() {
    const $splashClasses = `${style.splash} screen`;
    return (
        <splash className={$splashClasses}>
          <Plx parallaxData={parallaxData} className='splashParallaxWrapper'>
              <SvgTop/>
            <div class='squiggleWrapper' onClick={this.handleClick} title="Is this annoying? You can click to toggle animation on/off.">
              <SvgMiddle/>
              <SvgMiddle/>
            </div>
              <SvgBottom/>
          </Plx>
          <Plx parallaxData={parallaxDataButton} className='buttonWrapper'>
            <Button text='hi! how are you?' name="goToAbout" onButtonClick={() => this.props.changeScrollPosition('about')} direction='down'/>
          </Plx>
        </splash>
    );
  }
}

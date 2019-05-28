import {h, Component} from 'preact';
import Button from '../button';
import Plx from 'react-plx';
import style from './style';

const headlineParallaxData = [
  {
    start: 'about',
    end: 'work',
    properties: [
      {
        startValue: .5,
        endValue: 1,
        property: 'scale',
      },
    ],
  },
];

const contentParallaxData = [
  {
    start: 'about',
    duration: 'about',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

const mobileButtonParallaxData = [
  {
    start: 'self',
    end: 'work',
    properties: [
      {
        startValue: 0,
        endValue: 500,
        property: 'translateY',
      },
    ],
  },
];

const buttonParallaxData = [
  {
    start: 'self',
    startOffset: 150,
    end: 'work',
    properties: [
      {
        startValue: 0,
        endValue: 500,
        property: 'translateY',
      },
    ],
  },
];

export default class About extends Component {

  constructor(props) {
    super(props)
  };

  scrollToWork = () => {
    TweenMax.to(window, 1, {scrollTo: 'work'});
  }

  componentDidMount() {
  };

  render() {
    const $aboutClasses = `${style.about} screen`;
    return (<about className={$aboutClasses}>
      <div class="headline-wrapper">
      <Plx parallaxData={ headlineParallaxData }>
        <h1>Hi! I&rsquo;m Bill</h1>
      </Plx>
      </div>
      <Plx parallaxData={ contentParallaxData }>
        <div class="inner_content-wrapper">
            <div class="inner_content-wrapper_left">
              <p>
                &#8230;and I'm assuming you're a technical director, or a creative director, or somebody who needs a website; you know, that type of thing. You're probably looking for a designer or a developer or both or better yet you just read an article on Creative Technologists and Google brought you here. Which brings us what may be your first question&#8230;
              </p>
              <h2 class="wtf">WTF is a creative technologist???</h2>
              <p>It's me! I'm a Creative Technologist! I am a creative thinker from a technical POV. Equally adept at the creative and production phases of a project, I can dream up a product or campaign, slap together a prototype, run a UX study, iterate on designs, and write production quality webcode all by my lonesome. I'm comfortable in all roles along the production timeline, from UXer to Art Director to Front-End Developer. Most of my experience has been in advertising, but I've spent some time at a certain big tech company too. Here’s a link to my <a href="assets/docs/resume_bill-pearce.pdf" target="_blank">resume</a>.</p>
            </div>
          <div class="inner_content-wrapper_right">
            <p>
              I'm client friendly and I've spoken at a few conferences. Here's a video of my two of my talks: <a target="_blank" href="assets/media/about/videos/wdc2018-ux.mp4">Guerilla-Style User Research</a> & <a target="_blank" href="assets/media/about/videos/dtsummit2017-alexa.mp4">Thou Shalt Not Skill Without a Build Process</a>. If you're not sick of the sound of my voice yet, here's a few videos of me explaining some IoT projects I've done (I swear these were for work): <a target="_blank" href="assets/media/about/videos/ABC Prototype - Dr Pepper_1.mp4">Arduino Beverage Coozy</a> & <a target="_blank" href="assets/media/about/videos/Bill_FoodButton.mp4">The Office Food Button</a>.
              <br /><br />
              I also have a few little side-business in which I design and illustrate logos (there's a few in the work section) and teach <a href="https://en.wikipedia.org/wiki/Muay_Thai">Thai boxing</a>. I am usually pretty good about not mixing those two up so don't feel like I'm gonna head kick you if you ask me for a logo (unless you step out on the bill (jk!)).
              <br /><br />
              Don't be shy if you wanna reach out!
            </p>
            <h4 class="selectable-text">billwpearce at gmail dot com</h4>
            <div class="socialLinkWrapper">
              <a href="https://www.linkedin.com/in/billwpearce/" target="_blank">linkedin</a> | <a href="https://github.com/wwpearce" target="_blank">github</a>
            </div>
          </div>
        </div>
      </Plx>
      <Plx parallaxData={ buttonParallaxData } className='buttonWrapper'>
        <Button text='ok bill, let&rsquo;s see some work' onButtonClick={() => this.props.changeScrollPosition('work')} direction='down' name='goToWork' / >
      </Plx>
    </about>);
  }
}

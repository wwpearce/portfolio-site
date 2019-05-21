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
                &#8230; and I'm assuming you're a hiring manager, or a creative director, or my parents, or somebody who needs a website; you know, that type of thing. You're probably looking for a designer or a developer or better yet you just read an article on Creative Technologists and Google brought you here. Which brings us to the crux of the issue.
              </p>
              <h2>WTF is a creative technologist</h2>
              <p>It's me! I'm a Creative Technologist! I am equally adept at the creative and production phases of a project. I can dream up a product or campaign, slap together a prototype, run a UX study, iterate on designs, and write production quality webcode all by my lonesome. I'm comfortable in all roles along the production timeline, from UX to Art Direction to Front-End Dev. Most of my experience has been in advertising, but I've spent some time at tech companies too. Here’s a link to my <a href="#resume">resume</a>.</p>
            </div>
          <div class="inner_content-wrapper_right">
            <p>
              I'm client friendly and I've spoken at a few conferences on topics ranging from <a href="#">how to run a guerrilla UX study</a> to <a href="#">automation tools for Alexa skill development</a>.<br /><br />
              I also have a side-hustle designing and illustrating logos for small businesses.
              I also have a side-side hustle teaching private and group Muay Thai classes.
            </p>
            <h2>TL ; DR – I'm a designer / developer</h2>
            <h2 class="selectable-text">billwpearce at gmail dot com</h2>
          </div>
        </div>
      </Plx>
      <Button text='ok, let&rsquo;s see some work' onButtonClick={() => this.props.changeScrollPosition('work')} direction='down' / >
    </about>);
  }
}

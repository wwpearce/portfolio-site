import {h, render, Component} from 'preact';
import { animateScroll as scroll } from 'react-scroll'

import {isIOS, osVersion, mobileModel, deviceDetect, isMobileSafari, isSafari} from 'react-device-detect';

import Splash from './splash';
import About from './about';
import Work from './work';
import Content from './content';
import {
  addListener,
  addListeners,
  removeListener,
  removeListeners,
  normalizeString,
  arraysEqual
} from './utils';

import * as content from './site-contents.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.setState({
      section: 'splash',
      scrollPos: 0,
      state: 'default',
      dropdownOptions: content.work.tags,
      filters: [],
      activeContentName: 'dunkirk', // default
      activeContent: content.work.projects[0], // default
      filteredContentIndicies: []
    });
  };

  getContentFromShortName = (shortName) => {
    for (let i = 0; i < content.work.projects.length; i++) {
      if (content.work.projects[i].name.includes(shortName)) {
        return content.work.projects[i];
      };
    };
  };

  setSessionStorage = () => {
    if (!window.localStorage.bpHasVisited) {
      window.localStorage.bpHasVisited = true;
    };
  };

  getSessionStorage = () => {
    if (!window.localStorage.bpHasVisited) {
      console.log("Welcome for the first time.");
      this.setSessionStorage();
    } else {
      console.log("Welcome back.");
    }
  };

  changeDropdownState = (array) => {
    this.setState({dropdownOptions: array});
  };

  changeState = (state) => {
    let $state = state;
    let $previousState = this.state.state;
    this.setState({state: $state, previousState: $previousState});
  };

  toggleState = (state) => {
    if (this.state.state === 'default') {
      // Changing from the default state to the menu state
      this.changeState(state);
    } else if (this.state.state === state) {
      // Changing from the menu state back to default
      this.changeState('default');
    } else {
      // Panic button
      this.changeState('default');
    }
  };

  changeScrollPosition = (section) => {
    console.log(section);
    let offset = document.querySelector(section).offsetTop;
    scroll.scrollTo(offset);
  };

  setContentState = (contentName) => {
    this.setState({
      activeContentName: contentName,
      activeContent: this.getContentFromShortName(contentName)
    });
    console.log(this.state);
  };

  handleHamburgerClick = (e) => {
    this.toggleState('menu');
  };

  componentDidMount() {
    this.getSessionStorage();
    if(isIOS) {
      document.querySelector('html').classList.add('iOS');
      document.querySelector('html').classList.add(osVersion);
      document.querySelector('html').classList.add(mobileModel);
      console.log(deviceDetect());
    };
    if(isMobileSafari) {
      document.querySelector('html').classList.add('MobileSafari');
    };
    if(isSafari) {
      document.querySelector('html').classList.add('Safari');
    };
  };

  componentWillUnMount() {
  };

  render(props, state) {
    let $screen = <div class="screens">
      <Splash props={this.props} changeColors={this.changeColors} changeScrollPosition={this.changeScrollPosition}/>
      <About changeScrollPosition={this.changeScrollPosition}/>
      <Work props={this.props} state={this.state} changeScrollPosition={this.changeScrollPosition} getContentFromShortName={this.getContentFromShortName} setContentState={this.setContentState} arraysEqual={arraysEqual} normalizeString={normalizeString} setState={this.setState} content={content.work} addListeners={addListeners} changeDropdownState={this.changeDropdownState} toggleState={this.toggleState}/>
    </div>

    let $content =
    <div className={`content-wrapper`}>
      <Content props={this.props} state={this.state} changeScrollPosition={this.changeScrollPosition} getContentFromShortName={this.getContentFromShortName} toggleState={this.toggleState}/>
    </div>

    return (
        <app>
          {$screen}
          {$content}
        </app>

    );
  }
}

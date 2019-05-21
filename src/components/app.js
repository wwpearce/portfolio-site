import {h, render, Component} from 'preact';
// import {Router} from 'preact-router';
import {TweenMax, ScrollToPlugin} from "gsap/all";

import Hamburger from './hamburger';

import Splash from './splash';
import Menu from './screens/menu';
import About from './about';
import Work from './work';
import Content from './content';
import {addListener, addListeners, removeListener, removeListeners, normalizeString, arraysEqual} from './utils';

import * as content from './site-contents.json';

import bill from './images/bill.jpg';

const randomColor = require('randomcolor'); // import the script

// Code-splitting is automated for routes
// import Home from '../routes/home';
// import Profile from '../routes/profile';

export default class App extends Component {

  constructor(props) {
    console.log("Im the app");
    super(props);
    this.setState({
      section: 'splash',
      scrollPos: 0,
      state: 'default',
      dropdownOptions : content.work.tags,
      filters : [],
      activeContentName: 'dunkirk', // default
      filteredContentIndicies : []
    });
  };

  getContentFromShortName = (shortName) => {
    for(let i = 0; i < content.work.projects.length; i++) {
        if (content.work.projects[i].name.includes(shortName)) {
          return content.work.projects[i];
        };
    };
  };

  activeContent = content.work.projects;

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

  setContentState = (content) => {
    this.setState({activeContentName: content});
    console.log(this.state);
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
    TweenMax.to(window, 1, {scrollTo: section});
  };

  setContentState = (content) => {
    this.setState({activeContentName: content});
    console.log(this.state);
  };

  handleHamburgerClick = (e) => {
    this.toggleState('menu');
  };

  changeColors = (e) => {
    const $randomColor = randomColor();
    document.querySelector('svg').style.fill = $randomColor;
  };

  getVisibility = (state) => {
    if (this.state.state === state) {
      return 'enter';
    } else {
      return 'enter';
    };
  };

  componentDidMount() {
    this.getSessionStorage();
    console.log(this.getContentFromShortName('dunkirk'));
  };

  componentWillUnMount() {
  };

  render(props, state) {
    let $screen = <div class="screens">
      <Splash props={this.props} changeColors={this.changeColors} changeScrollPosition={this.changeScrollPosition} / >
      <About changeScrollPosition={this.changeScrollPosition} / >
      <Work props={this.props} state={this.state} changeScrollPosition={this.changeScrollPosition} setContentState={this.setContentState} arraysEqual={arraysEqual} normalizeString={normalizeString} setState={this.setState} content={content.work} addListeners={addListeners} changeDropdownState={this.changeDropdownState} toggleState={this.toggleState} />
    </div>

      let $content =
      <div className={`${this.getVisibility('content')} content-wrapper`}>
        <Content props={this.props} state={this.state} changeScrollPosition={this.changeScrollPosition} getContentFromShortName={this.getContentFromShortName} toggleState={this.toggleState} />
      </div>

      return (
      <app>
        {$screen}
        {$content}
      </app>
      );
  }
}

import {h, render, Component} from 'preact';
// import {Router} from 'preact-router';
import {TweenMax, ScrollToPlugin} from "gsap/all";

import Hamburger from './hamburger';

import Splash from './screens/splash';
import Menu from './screens/menu';
import About from './screens/about';
import Work from './screens/work';
import Content from './screens/content';
import {addListener, addListeners, removeListener, removeListeners, normalizeString, arraysEqual} from './utils';

import * as content from './content.json';

import bill from './images/bill.jpg';

const randomColor = require('randomcolor'); // import the script

// Code-splitting is automated for routes
// import Home from '../routes/home';
// import Profile from '../routes/profile';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.setState({
      section: 'splash',
      scrollPos: 0,
      state: 'default',
      previousState: 'default',
      dropdownOptions : content.work.tags,
      filters : [],
      activeContent : '',
      filteredContentIndicies : []
    });
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

  changeScrollPosition = (section, speed, number) => {
    let scrollTo = section ? section : number;
    TweenMax.to(window, speed, {scrollTo: scrollTo});
    this.toggleState('menu');
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
      return 'exit';
    };
  };

  componentDidMount() {
    this.getSessionStorage();
  };

  render(props, state) {
    let $screen = <div class="screens">
      <Splash props={this.props} changeColors={this.changeColors} / >
      <About image={bill} content={content.about} / >
      <Work props={this.props} state={this.state} arraysEqual={arraysEqual} normalizeString={normalizeString} setState={this.setState} content={content.work} addListeners={addListeners} changeDropdownState={this.changeDropdownState} toggleState={this.toggleState} />
    </div>

    let $menu =
    <div className={`${this.getVisibility('menu')} menu-wrapper`}>
      <Menu props={this.props} state={this.state} content={content.menu} addListeners={addListeners} removeListeners={removeListeners} changeScrollPosition={this.changeScrollPosition} />
    </div>

      let $content =
      <div className={`${this.getVisibility('content')} content-wrapper`}>
        <Content props={this.props} state={this.state} toggleState={this.toggleState} />
      </div>

      return (
      <app>
        <Hamburger state={this.state} props={this.props} handleHamburgerClick={this.handleHamburgerClick} />
        {$menu}
        {$content}
        {$screen}
      </app>
      );
  }
}

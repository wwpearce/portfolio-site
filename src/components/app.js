import {
  h,
  render,
  Component
} from 'preact';
import {
  Router
} from 'preact-router';
import { TweenMax, ScrollToPlugin } from "gsap/all";

import Hamburger from './hamburger';

import Splash from './screens/splash';
import Menu from './screens/menu';
import About from './screens/about';
import Work from './screens/work';
import Content from './screens/content';
import { addListener, addListeners, removeListener, removeListeners } from './utils';

import * as content from './content.json';

var randomColor = require('randomcolor'); // import the script

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {

  constructor(props) {
    super(props);
		this.setState({
      appState: 'no-menu',
      menu : false,
      section : 'splash',
      scrollPos : 0,
      state : 'default',
      previousState : 'default',
      burger : null
    });
    console.log(content);
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
    }
    else {
      console.log("Welcome back.");
    }
  };

  changeState = (state) => {
    let $state = state;
    let $previousState = this.state.state;
    this.setState({
      state: $state,
      previousState: $previousState
    });
    console.log(`Changed state from ${$previousState} to ${$state}`);
  };

  changeScrollPosition = (section, speed, number) => {
    let scrollTo = section ? section : speed;
    TweenMax.to(window, speed, {scrollTo:scrollTo});
    this.toggleState('menu');
  };

  addRefs = () => {
    this.$svg = document.querySelector('svg');
  };

	addListenerss = () => {
		this.$svg.addEventListener('click', this.changeColors, false);
	};

  toggleState = (state) => {
    if (this.state.state === 'default') {
      // Changing from the default state to the menu state
      this.changeState(state);
    }
    else if (this.state.state === state) {
      // Changing from the menu state back to default
      this.changeState('default');
    }
    else {
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

  scrollToSection = (section) => {
    console.log(section);
  };

  returnMenuState = () => {
    return this.state.state;
  };

  getState = () => {

  };

  getVisibility = (state) => {
    if(this.state.state === state) {
      return 'visible';
    }
    else {
      return 'hidden';
    };
  };

  componentDidMount() {
    this.getSessionStorage();
    this.addRefs();
		this.addListenerss();
    this.burger = document.querySelector('.hamburgerActual');
  };

  render(props, state) {
    let $screen =
      <div class="screens">
        <Splash / >
        <About content={content.about} / >
        <Work props={this.props} addListeners={addListeners} toggleState={this.toggleState} / >
      </div>

    let $menu =
    <div className={`${this.getVisibility('menu')} menu-wrapper`}>
      <Menu props={this.props} content={content.menu} returnMenuState={this.returnMenuState} visibility={this.returnMenuState} changeScrollPosition={this.changeScrollPosition}/ >
    </div>

    let $content =
    <div className={`${this.getVisibility('content')} content-wrapper`}>
      <Content props={this.props} toggleState={this.toggleState} changeState={this.changeState} / >
    </div>

    return (
			<app>
      <Hamburger state={this.state} props={this.props} handleHamburgerClick={this.handleHamburgerClick} /  >
      {$menu}
      {$content}
      {$screen}
      </app>
    );
  }
}

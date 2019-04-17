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

var randomColor = require('randomcolor'); // import the script

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {

  constructor(props) {
    super(props)
		this.setState({
      appState: 'no-menu',
      menu : false,
      section : 'splash',
      scrollPos : 0
    });
  };

  changeScrollPosition = (section, speed, number) => {
    let $scrollTo;
    if(number) {
      $scrollTo = number;
    }
    else if(section) {
      $scrollTo = `${section}`;
    }
    TweenMax.to(window, speed, {scrollTo:$scrollTo});
    console.log("changing");
  };

	addListeners = () => {
		const $svg = document.querySelector('svg');
    const $hamburger = document.querySelector('#hamburger');


		$svg.addEventListener('click', this.changeColors, false);
    $hamburger.addEventListener('click', this.doHamburgerClick, false);
	};

  toggleMenuState = () => {

    let $state = this.state.appState;
    if ($state === 'no-menu') {
      $state = 'menu';
      this.saveScrollPosition();
    }
    else if ($state === 'menu') {
      $state = 'no-menu';
    }
    this.setState({
      appState: $state
    });
    console.log(this.state);
  };

  toggleHamburger = (target) => {
    let $item;
    if(typeof target === 'string') {
      $item = document.querySelector('.' + target);
    }
    else {
      $item = target
      this.resetScrollPosition();
    }
    $item.classList.toggle('is-active');
    this.toggleMenuState();
  };

  doHamburgerClick = (e) => {
    let $target;
    if (e.target.children[0]) {
      $target = e.target.children[0];
    }
    this.toggleHamburger($target);
  };

	changeColors = (e) => {
		const $randomColor = randomColor();
		document.querySelector('svg').style.fill = $randomColor;
	};

  saveScrollPosition = () => {
    let $doc = document.documentElement;
    let $top = (window.pageYOffset || $doc.scrollTop)  - ($doc.clientTop || 0);
    this.setState({
      scrollPos: $top
    });
  };

  resetScrollPosition = () => {
    let $scrollPos = this.state.scrollPos;
    this.changeScrollPosition(null, .01, $scrollPos);
    console.log(window.scrollY);
  };

  scrollToSection = (section) => {
    console.log(section);
  };

  componentDidMount() {
		this.addListeners();
    // window.scrollTo(0, 500);
  };

  render(props, state) {
    let $state = this.state.appState;
    let $screen;

    if ($state === 'menu') {
      $screen = <Menu props={this.props} toggleHamburger={this.toggleHamburger} changeScrollPosition={this.changeScrollPosition}/ >
    }
    else {
      $screen =
      <div class="screens">
        <Splash state={this.state}/ >
        <About / >
        <Work / >
      </div>
    }
    return (
			<div id = "app" >
        <Hamburger /  >
	      {$screen}
      </div>
    );
  }
}

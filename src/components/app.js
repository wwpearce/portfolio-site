import {
  h,
  render,
  Component
} from 'preact';
import {
  Router
} from 'preact-router';

import Hamburger from './hamburger';

import Splash from './screens/splash';
import Menu from './screens/menu';
import About from './screens/about';

var randomColor = require('randomcolor'); // import the script

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {

  constructor(props) {
    super(props)
		this.setState({
      appState: 'splash'
    });
		this.handleScrollButtonClick = this.handleScrollButtonClick.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  };

  handleHamburgerClick = (e) => {
    e.preventDefault();
		let $state, $buttonClicked;
		$buttonClicked = e.target.id;
		if ($buttonClicked === 'menu-button') {
			$state = 'menu';
		}
    this.setState({
      appState: $state
    });
		console.log(this.state);
  };

	handleScrollButtonClick = (e) => {
    e.preventDefault();
		let $state, $buttonClicked;
		$buttonClicked = e.target.id;
		if ($buttonClicked === 'menu-button') {
			$state = 'menu';
		}
    this.setState({
      appState: $state
    });
		console.log(this.state);
  };

	addListeners = () => {
		const $svg = document.querySelector('svg');
		$svg.addEventListener('click', this.changeColors, false);

    const $hamburger = document.querySelector('#hamburger');
    $hamburger.addEventListener('click', this.toggleHamburger, false);
	};

  toggleMenuState = (e) => {
    let $state = this.state.appState;
    if ($state === 'splash') {
      $state = 'menu';
    }
    else if ($state === 'menu') {
      $state = 'splash';
    }
    this.setState({
      appState: $state
    });
  };

  toggleHamburger = (e) => {
    if (e.target.id === 'hamburgerActual') {
      e.target.classList.toggle('is-active');
    }
    else {
      e.target.children[0].classList.toggle('is-active');
    }
    this.toggleMenuState();
  };

	changeColors = (e) => {
		const $randomColor = randomColor();
		document.querySelector('svg').style.fill = $randomColor;
	};

  componentDidMount() {
		this.addListeners();
  };

  render(props, state) {
    let $state = this.state.appState;
    let $screen;

    if ($state === 'splash') {
      $screen =
      <div class="screen">
        <Splash state={this.state}/ >
        <Menu / >
      </div>
    }
    else if ($state === 'menu') {
      $screen = <Menu / >
    }
    else {
      $screen = <Splash state={this.state}/ >
    }
    return (
			<div id = "app" >
        <Hamburger /  >
	      {$screen}
      </div>
    );
  }
}

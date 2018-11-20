import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Splash from './splash';
import Button from './button';

var randomColor = require('randomcolor'); // import the script

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		console.log(this);
		document.querySelector('body').addEventListener("click", function(){
		    // document.getElementById("demo").innerHTML = "Hello World";
				const $randomColor = randomColor();
				document.querySelector('svg').style.fill = $randomColor;
				document.querySelector('a').style.color = $randomColor;
		});
	}

	render() {
		return (
			<div id="app">
			<Splash />
			<Button />
			</div>
		);
	}
}

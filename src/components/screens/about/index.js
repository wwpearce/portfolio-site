import {
  h,
  Component
} from 'preact';
import style from './style';

export default class About extends Component {

  constructor(props) {
    super(props)
  };

  addListeners = () => {
	};


  componentDidMount() {
    this.addListeners();
  };

  render() {
    const $aboutClasses = `${style.about} screen`;
    return (
			<about className={$aboutClasses}>
        <div class="headline-wrapper">
          <h1>What Am I Doing Here Bill</h1>
        </div>
        <div class="inner_content-wrapper">
          <div class="inner_content-wrapper_left">
            <p>Well I'm assuming you're a hiring manager, or a recruiter, or my parents, or somebody who needs a website; you know, that type of thing. You're probably looking for a designer or a developer or better yet you just read an article on Creative Technologists and Google brought you here.	Which brings us to the crux of the issue.</p>
            <h1>What the Hell is a creative technologist</h1>
            <p>It's me! I'm a Creative Technologist! I am equally adept at the creative and production phases of a product or project. I can dream up a product or campaign, slap together a prototype, run a UX study, iterate on designs, and write production quality webcode all by my lonesome. I'm comfortable in all roles along the production timeline, from UX to Art Direction to Front-End Dev. Most of my experience has been in advertising, but I've spent some time at tech companies too.</p>
            <p>I'm client friendly and I've spoken at a few conferences on topics ranging from how to run a guerrilla UX study to automation tools for Alexa skill development.</p>
          </div>
          <div class="inner_content-wrapper_right">
            <div class="inner_content-wrapper_right_images">
              <img src={this.props.image} />
            </div>
            <div class="inner_content-wrapper_right-tags"></div>
          </div>
        </div>
			</about>
    );
  }
}

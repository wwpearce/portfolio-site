import {
  h,
  Component
} from 'preact';
import Button from '../button';
import Plx from 'react-plx';

import style from './style';

const headlineParallaxData = [
  {
    start: '.content-wrapper',
    duration: '100vh',
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
    start: '.content-wrapper',
    duration: '100vh',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

const mediaParallaxData = [
  {
    start: '.content-wrapper',
    duration: '100vh',
    properties: [
      {
        startValue: 500,
        endValue: 0,
        property: 'translateX',
      },
    ],
  },
];

export default class Content extends Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  getLinks = (array) => {
    let links = [];
    for (let i = 0; i < array.length; i++) {
      links.push(
        <a class="contentLink" target="_blank" href={array[i].link}>{array[i].text}</a>
      )
      if(i < (array.length - 1)) {
        links.push(
          <span class="linkDivider"> | </span>
        );
      };
    }
    return links;
  };

  getMedia = (array, type) => {
    let media = [];
    for (let i = 0; i < array.length; i++) {
      if(type === 'img') {
        media.push(
          <img class="contentImage" src={array[i].url} alt={array[i].text} / >
        )
      }
      if(type === 'vid') {
        media.push(
          <video class="contentImage" src={array[i].url} alt={array[i].text} / >
        )
      }
    }
    return media;
  };

  scrollBackToWork = () => {
    TweenMax.to(window, 1, {scrollTo: 'work'});
  }

  render() {
    const $contentClasses = `${style.content} ${this.props.state.activeContent} screen`;
    let content = this.props.getContentFromShortName(this.props.state.activeContentName);
    // console.log(content.links);
    this.getLinks(content.links);

    return (
			<content class={$contentClasses}>
        <Plx parallaxData={headlineParallaxData}>
          <h1 class={style.contentHeader}>{content.fullName}</h1>
        </Plx>
        <Plx parallaxData={contentParallaxData}>
          <div class={style.flexWrapper}>
            <div class={style.flexLeft}>
              <p>
                Client: {content.client}
                <br />
                Agency: {content.agency}
                <br />
                Links: {this.getLinks(content.links)}
              </p>

            </div>
            <div class={style.flexRight}>
              <p>{content.bodyCopy}</p>
            </div>
          </div>
        </Plx>
        <Plx parallaxData={mediaParallaxData}>
          <div class={style.mediaWrapper + ' mediaWrapper'}>
            {this.getMedia(content.images, 'img')}
          </div>
        </Plx>
        <Button text='scroll back up to work' onButtonClick={() => this.props.changeScrollPosition('work')} direction='up' / >
			</content>
    );
  }
}

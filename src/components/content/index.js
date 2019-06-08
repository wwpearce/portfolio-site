import {
  h,
  Component
} from 'preact';
import Button from '../button';
import Plx from 'react-plx';
import {isMobile} from 'react-device-detect';

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
        if(!array[i].cropped) {
          media.push(
            <a class="contentImageLink" href={array[i].url} target="_blank">
              <img class="contentImage" src={array[i].url} alt={array[i].text}/>
              <div class="contentInfo">
                <h4>{array[i].text}</h4>
              </div>
            </a>
          )
        }
        else {
          media.push(
            <a class="contentImageLink" href={array[i].url} target="_blank">
              <img class="contentImage" src={array[i].cropped} alt={array[i].text}/>
              <div class="contentInfo">
                <h4>{array[i].text}</h4>
              </div>
            </a>
          )
        }
      }
      if(type === 'vid') {
        media.push(
          <video class="contentVideo" data-alt={array[i].text} controls>
            <source src={array[i].url} type="video/mp4"/>
          </video>
        )
      }
    }
    return media;
  };

  getVideo = (object) => {
    return (
      <video class="contentVideo" data-alt={object.text} controls>
        <source src={object.url} type="video/mp4"/>
      </video>
    )
  };

  getBodyCopy = (bodyCopy) => {
    let html = [];
    let headers = ['The UX:', 'My Part:', 'Of Note:'];
    if(Array.isArray(bodyCopy)) {
      for (let i = 0; i < bodyCopy.length; i++) {
        html.push(
          <div>
            <h5>{headers[i]}</h5>
            <p>{bodyCopy[i]}</p>
          </div>
        )
      }
    }
    else {
      html.push(
        <p>{bodyCopy}</p>
      )
    }
    return (html);
  };

  scrollBackToWork = () => {
    TweenMax.to(window, 1, {scrollTo: 'work'});
  }

  render() {
    const $contentClasses = `${style.content} ${this.props.state.activeContentName} screen`;
    let content = this.props.state.activeContent;
    this.getLinks(content.links);

    return (
			<content class={$contentClasses}>
        <Plx parallaxData={headlineParallaxData}>
          <h1 class={style.contentHeader}>{content.fullName}</h1>
        </Plx>
        <Plx parallaxData={contentParallaxData}>
          <div class={style.flexWrapper}>
            <div class={style.flexLeft}>
              <div>
                <h5>Client(s):</h5> {content.client}
              </div>
              <div>
                <h5>Agency:</h5> {content.agency}
              </div>
              <div>
                <h5>Role(s):</h5>
                  {content.roles.map(function(name, index){
                    if (index < content.roles.length - 1) {
                      return <span key={ index }> {name},</span>;
                    }
                    else {
                      return <span key={ index }> {name}</span>;
                    }
                  })}
                </div>
                <div>
                  <h5>Links:</h5> {this.getLinks(content.links)}
                </div>
            </div>
            <div class={style.flexRight}>
              {this.getBodyCopy(content.bodyCopy)}
            </div>
          </div>
        </Plx>
        <Plx parallaxData={mediaParallaxData}>
          <div class={style.mediaWrapper + ' mediaWrapper'}>
            <h3>{(isMobile ? "Tap" : "Click")} to open image in new tab</h3>
              {this.getMedia(content.images, 'img')}
          </div>
        </Plx>
        <Button text='scroll back up to work' onButtonClick={() => this.props.changeScrollPosition('work')} direction='up' / >
			</content>
    );
  }
}

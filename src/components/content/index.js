import {
  h,
  Component
} from 'preact';
import Button from '../button';

import style from './style';

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
        <h1 class={style.contentHeader}>{content.fullName}</h1>
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
        <div class={style.mediaWrapper}>
          {this.getMedia(content.images, 'img')}
        </div>
        <Button text='scroll back up to work' onButtonClick={() => this.props.changeScrollPosition('work')} direction='up' / >
			</content>
    );
  }
}

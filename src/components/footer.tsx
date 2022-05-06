import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit, faSpotify, faBandcamp, faSoundcloud, faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFileWaveform, faMusic } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ReactComponent as AppleMusicLogo } from '../assets/Apple_Music_Icon_blk.svg';
import { ReactComponent as AudiomackLogo } from '../assets/Audiomack_Icon_wht.svg';


type FooterItemProps = {
  to: string,
  icon: IconDefinition | JSX.Element,
  text: string
}

const footerLinks: FooterItemProps[] = [
  {
    to: "https://open.spotify.com/artist/6GHsql1Kd2Ka20UpEOLnnV?si=ttyqtO9XRseX1Aip3xnnHQ",
    icon: faSpotify,
    text: "Spotify"
  },
  {
    to: "https://music.apple.com/us/artist/ward/1608812889",
    icon: <AppleMusicLogo style={{ width: '1em', height: 'auto', fill: 'white', marginRight: '1em' }} />,
    text: "Apple Music"
  },
  {
    to: "https://wardsworld.bandcamp.com/",
    icon: faBandcamp,
    text: "Bandcamp"
  },
  {
    to: "https://soundcloud.com/ward804",
    icon: faSoundcloud,
    text: "Soundcloud"
  },
  {
    to: "https://audiomack.com/wardsworld",
    icon: <AudiomackLogo style={{ width: '1em', height: 'auto', fill: 'white', marginRight: '1em' }} />,
    text: "Audiomack"
  },
  {
    to: "https://www.youtube.com/channel/UCd0T7E5mmWJL5IuTrPZBbiw",
    icon: faYoutube,
    text: "YouTube"
  },
  {
    to: "https://www.instagram.com/yoworstfriend/",
    icon: faInstagram,
    text: "Instagram"
  },
  {
    to: "https://twitter.com/yoworstfriend",
    icon: faTwitter,
    text: "Twitter"
  },
  {
    to: "https://www.tiktok.com/@yoworstfriend",
    icon: faTiktok,
    text: "TikTok"
  },
  {
    to: "https://www.reddit.com/r/wardandfriends/",
    icon: faReddit,
    text: "Reddit"
  },
  {
    to: "mailto:wardsworld.mgmt@gmail.com",
    icon: faEnvelope,
    text: "E-mail"
  },
]

const FooterItem = (props: FooterItemProps): JSX.Element => {
  const [width, setWidth] = useState('3em');

  const hover = () => setWidth(`${props.text.length + 2}em`);
  const leave = () => setWidth('3em');

  return (
    <a onMouseEnter={hover} onMouseLeave={leave} href={props.to} style={{
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '1em',
      width: width,
      textDecoration: 'none',
      color: 'white',
      transition: 'width 0.5s',
    }}>
      {React.isValidElement(props.icon) 
        ? props.icon
        : <FontAwesomeIcon icon={props.icon as IconDefinition} style={{ width: '1em', height: 'auto', marginRight: '1em' }} />}
      {props.text}
    </a>
  )
}

export default function Footer(): JSX.Element {
  return (
    <Container fluid style={{ display: 'flex', justifyContent: 'center', padding: '1em', flexWrap: 'wrap' }}>
      {footerLinks.map(link => <FooterItem to={link.to} icon={link.icon} text={link.text} />)}
    </Container>
  )
}
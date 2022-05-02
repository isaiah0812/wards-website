import React from 'react';
import Menu from '../../components/menu';
import WardVideo from '../../components/wardVideo';
import Video from '../../models/video';
import videos from './videos.json';

export default function Videos() {
  return (
    <React.Fragment>
      <Menu />
      {videos.map((video: Video) => <WardVideo name={video.name} youTubeId={video.youTubeId} />)}
    </React.Fragment>
  );
}
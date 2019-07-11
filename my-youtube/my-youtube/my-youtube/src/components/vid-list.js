import React from 'react';
import VidListItem from './vid-list-item.js'

const VidList = (props) => {
  const VideoItems = props.videos.map((video) =>{
    return (
      <VidListItem
        onVidSelect={props.onVidSelect}
        key={video.etag}
        video={video} />
      );
  });

  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VidList;

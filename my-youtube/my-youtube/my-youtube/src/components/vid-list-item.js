import React from 'react';

const VidListItem = ({video, onVidSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
     <li onClick ={() => onVidSelect(video)} className="list-group-item">
        <div className="video-list-media">
          <div className="media-left">
           <img className="media-object" alt="video" src={imageUrl} />
          </div>
          <div>
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>

     </li>
   );
};


export default VidListItem;

import React from 'react';

const VideoItem = ({video}) =>{
    const title = video.snippet.title;
    return (
        <div>
            <img src={video.snippet.thumbnails.default.url} />
            {title}
        </div>
    );
};

export default VideoItem;
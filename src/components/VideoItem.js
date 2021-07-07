import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>{
    const title = video.snippet.title;
    return (
        <div onClick={()=> onVideoSelect(video)} className="video-item item">
            <img 
                className="ui image rounded" 
                src={video.snippet.thumbnails.default.url} 
                alt={video.snippet.title}
            />
            <div className="content ">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>{
    const title = video.snippet.title;
    return (
        <div>
            <div onClick={()=> onVideoSelect(video)} className="ui segment video-item item">
                <img 
                    className="ui image rounded" 
                    src={video.snippet.thumbnails.default.url} 
                    alt={video.snippet.title}
                />
                <div className="ui content ">
                    <h5 className="ui grey header">
                        {title}
                    </h5>
                </div>
            </div>

        </div>
    );
};

export default VideoItem;
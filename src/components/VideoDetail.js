import './VideoDetail.css';
import React from 'react';

const VideoDetail = ({ video }) =>{
    if (!video){
        return (
            <div>Loading...</div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="ui segments video-detail">
            <div className="ui segment embed">
                <iframe src={videoSrc} title={video.snippet.title}/>
            </div>
            <div className="ui inverted grey segment vcontainer">
                <div className="ui header vtext">
                    {video.snippet.title}
                </div>
                <div className="ui vtext">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
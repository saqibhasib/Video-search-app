import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import ytapi from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };
    
    onInputSubmit = async (input) => {
        const response = await ytapi.get('/search', {
            params: {
                q: input
            }
        });

        this.setState ({
            videos: response.data.items
        });
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormParentSubmit={this.onInputSubmit} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelection={this.onVideoSelect} 
                    videos={this.state.videos}/>
            </div>
        );
    };
};

export default App;
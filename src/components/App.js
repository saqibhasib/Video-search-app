import React from "react";
import SearchBar from "./SearchBar";
import ytapi from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import './App.css';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onInputSubmit('living big in tiny house');
    }
    
    onInputSubmit = async (input) => {
        const response = await ytapi.get('/search', {
            params: {
                q: input
            }
        });

        this.setState ({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    };

    render(){
        return (
            <div className="application">
                <div className="ui container">
                    <SearchBar onFormParentSubmit={this.onInputSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className=" four wide column">
                                <VideoList 
                                    onVideoSelection={this.onVideoSelect} 
                                    videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import ytapi from '../apis/youtube';
import VideoList from "./VideoList";

class App extends React.Component {
    state = {
        videos: []
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

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormParentSubmit={this.onInputSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    };
};

export default App;
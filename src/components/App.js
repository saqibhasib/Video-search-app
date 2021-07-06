import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import ytapi from '../apis/youtube';

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
                I have {this.state.videos.length} videos.
            </div>
        );
    };
};

export default App;
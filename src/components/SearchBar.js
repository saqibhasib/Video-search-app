import React from "react";
import './SearchBar.css';

export default class SearchBar extends React.Component {
    state={
        input: ''
    };
    
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onFormSubmit = event =>{
        event.preventDefault();
        
        this.props.onFormParentSubmit (this.state.in);
    };

    render() {
        return (
             <div className="search-bar ui inverted blue segment">
                 <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="white">
                        <label>Video Search App</label>
                        <input 
                            type="text" 
                            value={this.state.input}
                            onChange={this.onInputChange}
                            />
                    </div>
                 </form>
             </div>
        );
    };
}
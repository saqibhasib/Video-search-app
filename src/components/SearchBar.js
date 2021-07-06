import React from "react";

export default class SearchBar extends React.Component {
    state={
        input: ''
    };
    
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onFormSubmit = event =>{
        event.preventDefault();
        console.log(event);
    };

    render() {
        return (
             <div className="search-bar ui segment">
                 <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
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
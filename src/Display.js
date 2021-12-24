import React, { Component } from 'react'


class Display extends Component {
    render() {
        return (
            <div>
            
            <p>{this.state.fname} belongs to the department - {this.state.dept} with a rating of {this.state.ratng}</p>
                
            </div>
        )
    }
}
export default Display;


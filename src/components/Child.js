  
import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.latstVote}</h1>
            </div>
        )
    }
}
export default Child;
import React, { Component } from 'react'

class HornedBeast  extends Component {
    render() {
        return (
            <>
                <h2> title: {this.props.title} </h2>
                <img src={this.props.src} alt={this.props.titleImg} titleImg='image'/>
                <p> description: {this.props.description} </p>
            </>
        )
    }
}

export default HornedBeast 

import React, { Component } from 'react'

class HornedBeast  extends Component {
    render() {
        return (
            <>
                <h2> Imgtitle: {this.props.Imgtitle} </h2>
                <img src={this.props.src} alt={this.props.titleImg} titleImg='image'/>
                <p> desc: {this.props.desc} </p>
            </>
        )
    }
}

export default HornedBeast 

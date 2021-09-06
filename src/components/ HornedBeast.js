import React, { Component } from 'react'

class HornedBeast extends Component {
    render() {
        return (
            <>
                <h2>Title: {this.props.title} </h2>
                <img src={this.props.img} alt={this.props.titles} titles='animal' />
                <p> description :  {this.props.description} </p>

            </>
        )
    }
}

export default HornedBeast

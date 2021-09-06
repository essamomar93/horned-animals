import React, { Component } from 'react'
// import Main from './Main';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0,
        };
    };
    raiseVote = () => {
        this.setState({
            vote: this.state.vote + 1
        });
    };
    render() {

        return (
            <div>
                <h2>Title: {this.props.item.title}  </h2>
                <img src={this.props.item.image_url} width='250' height='150' onClick={this.raiseVote} />
                <h4>Keyword: {this.props.item.keyword}</h4>
                <h4>Horns: {this.props.item.horns}</h4>
                <p>{this.props.item.description} </p>
                <h3>{this.state.vote}</h3>
            </div>
        )
    }
}
export default HornedBeast;

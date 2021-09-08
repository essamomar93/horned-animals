import React, { Component } from 'react'
import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';

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
    getHandleOpen = () => {
        let title = this.props.item.title;
        let src = this.props.item.image_url;
        let description =this.props.item.description;

        this.props.handleOpen(src, title,description);
    }
    render() {

        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.item.image_url} width='100%' height='100%' onClick={this.raiseVote} />
                        <Card.Body>
                            <Card.Title>Title: {this.props.item.title}</Card.Title>
                            <Card.Text>
                                Keyword: {this.props.item.keyword}
                                <br />
                                Horns: {this.props.item.horns}
                                <br />
                                description: {this.props.item.description}
                                <br />
                                {this.state.vote}
                            </Card.Text>
                            <Button onClick={this.getHandleOpen} variant="primary">Show Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}
export default HornedBeast;

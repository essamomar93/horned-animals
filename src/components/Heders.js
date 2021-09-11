import React, { Component } from 'react'
import {
    Navbar,
    Container,
} from 'react-bootstrap';

class Heders extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                           <h1>Horned Animals</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Heders;

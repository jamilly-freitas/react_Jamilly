import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

class BarraNavegacao extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Livros">Livros</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default BarraNavegacao;
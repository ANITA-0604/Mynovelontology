import React from 'react';
import { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../css/NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    Novel ontology
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}
 
export default NavBar;
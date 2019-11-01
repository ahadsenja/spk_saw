import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand>SPK-SAW</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavigationBar
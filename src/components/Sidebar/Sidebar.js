import React from 'react'
import { Nav } from 'react-bootstrap'
import './sidebar.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div style={{ position: 'fixed' }}>
                <Nav className='flex-column'>
                    <Nav.Link style={{ color: '#ffffff', paddingTop: '20px' }}>Master</Nav.Link>
                </Nav>
            </div>
        )
    }
}

export default Sidebar
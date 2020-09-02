import React, { Component } from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import AddPatientMain from '../AddPatient/AddPatientMain.jsx'

class NavBarMain extends Component {
    constructor(props) {
        super(props)

        this._logout = this._logout.bind(this)
    }

    _logout() {
        this.props.firebase.doSignOut()        
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Doctor Home</Navbar.Brand>
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav>
                    <AddPatientMain firebase={this.props.firebase} />
                    <Nav.Link 
                        onClick={this._logout}>
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBarMain
import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import PatientsList from './PatientsList.jsx'

class PatientsMain extends Component {
    render() {
        return (
            <Container
                style={{
                    // marginLeft: -60
                }}>
                <Row>
                    <Col>
                        <PatientsList />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PatientsMain
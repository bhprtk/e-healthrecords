import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Modal from 'react-bootstrap/Modal'
import EditContactInfo from './EditContactInfo.jsx'

class ContactInfoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }

        this._openModal = this._openModal.bind(this)
        this._hideModal = this._hideModal.bind(this)
    }

    _hideModal() {
        this.setState({ showModal: false })
    }

    _openModal() {
        this.setState({ showModal: true })
    }

    render() {
        const { basicInfo } = this.props
        console.log('basicInfo', basicInfo)
        return (
            <Container
                style={{
                    paddingTop: 20,
                    paddingLeft: 20,
                    fontSize: 14
                }}>
                <Row>
                    <Col>
                        <strong>Email</strong>
                        <p>{basicInfo.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <strong>Mobile Phone</strong>
                        <p>{basicInfo.mobilePhone}</p>
                    </Col>
                    <Col>
                        <strong>Home Phone</strong>
                        {basicInfo.homePhone ?
                            <p>{basicInfo.homePhone}</p>
                            :
                            <p
                                onClick={this._openModal}
                                style={{
                                    color: 'green',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}>
                               + Add
                            </p>}
                        
                    </Col>
                </Row>

                <Modal
                    size="lg"
                    show={this.state.showModal} 
                    onHide={this._hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Patient Info</Modal.Title>
                    </Modal.Header>
                    <EditContactInfo basicInfo={basicInfo} />
                </Modal>
                

            </Container>
        )
    }
}

export default ContactInfoPage
import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'



class PatientInfoForm extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            validated: false,
            formValues: {
                gender: 'Female'
            }
        }

        this._handleChange = this._handleChange.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            this.setState({ validated: true });
        } else {
            this.props.submitPatientInfo(this.state.formValues)
        }
    }

    _handleChange(event) {
        const { name, value } = event.target
        this.state.formValues[name] = value
    } 
      
    render() {
        return (
            <Form
                onChange={e => this._handleChange(e)}
                onSubmit={e => this._handleSubmit(e)}
                noValidate
                validated={this.state.validated}>
                <Modal.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="First Name" 
                                name="firstName" 
                                required />
                            <Form.Control.Feedback type="invalid">
                                First name is required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="middleName">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Middle Name"
                                name="middleName" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Last name is required
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="birthDate">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control 
                                type="date" 
                                placeholder="Birth Date" 
                                name="birthDate"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Birth date is required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control 
                                as="select" 
                                name="gender"
                                defaultValue="Female"
                                required>
                                <option>Female</option>
                                <option>Male</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                name="email"
                                required />
                            <Form.Control.Feedback type="invalid">
                                An email address is required
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="mobile">
                            <Form.Label>Mobile Phone</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Mobile Phone" 
                                name="mobilePhone"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Mobile phone number is required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="homePhone">
                            <Form.Label>Home Phone</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Home Phone" 
                                name="homePhone" />
                        </Form.Group>
                    </Form.Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-danger" onClick={this.props.hideModal}>
                        Close
                    </Button>
                    <Button 
                        type="submit"
                        variant="outline-secondary">
                        Save
                    </Button>
                </Modal.Footer>

            </Form>
        )
    }
}

export default PatientInfoForm
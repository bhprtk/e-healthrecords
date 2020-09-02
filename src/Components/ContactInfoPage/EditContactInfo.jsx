import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

class EditContactInfo extends Component {

    constructor(props) {
        super(props)

        this.state ={
            formValues: {},
            validated: false
        }

        this._handleChange = this._handleChange.bind(this)
        // this._handleSubmit = this._handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log('this.props', this.props)
        const { email, mobilePhone, homePhone } = this.props.basicInfo
        console.log('email', email)
        console.log('homePhone', homePhone)
        console.log('mobilePhone', mobilePhone)
    }

    _handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            this.setState({ validated: true });
        } else {
            console.log('submit')
        }
    }

    _handleChange(event) {
        const { name, value } = event.target
        this.state.formValues[name] = value
    } 

    render() {
        const { basicInfo } = this.props
        return (
            <Form
                onChange={e => this._handleChange(e)}
                onSubmit={e => this._handleSubmit(e)}
                noValidate
                validated={this.state.validated}
                >
                <Modal.Body>                        
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                defaultValue={basicInfo.email}
                                placeholder="Enter email" 
                                name="email" 
                                required/>
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
                    <Button 
                        variant="outline-danger" 
                        // onClick={this.props.hideModal}
                        >
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

export default EditContactInfo
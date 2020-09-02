import React, { Component } from 'react'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

class SignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailValue: '',
            passwordValue: '',
            error: ''
        }

        this._onEmailChange = this._onEmailChange.bind(this)
        this._onPasswordChange = this._onPasswordChange.bind(this)
        this._signIn = this._signIn.bind(this)
        this._resetError = this._resetError.bind(this)
    }

    _onEmailChange(event) {
        const { value } = event.target
        this.setState({
            emailValue: value
        })
    }

    _onPasswordChange(event) {
        const { value } = event.target
        this.setState({
            passwordValue: value
        })
    } 

    _signIn(event) {
        event.preventDefault()
        const { emailValue, passwordValue } = this.state
        this.props.firebase
            .doSignInWithEmailAndPassword(emailValue, passwordValue)
            .then(authUser => {
                console.log('authUser', authUser)
            })
            .catch(error => {
                console.log('error', error)
                const { message } = error
                this.setState({ error: message })
            })
    }

    _resetError() {
        this.setState({ error: '' })
    }

    render() {
        return (
            <Form 
                style={{ 
                    background: '#f5f5f5' ,
                    padding: 50,
                    marginTop: '50%'
                }}
                onSubmit={e => this._signIn(e)}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            onChange={this._onEmailChange}
                            />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={this._onPasswordChange}
                        />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button 
                            type="submit"
                            variant="outline-secondary"
                            block>
                            Sign in
                        </Button>
                    </Col>
                </Form.Group>
                
                {this.state.error
                    ?   <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Alert
                                    onClose={this._resetError} 
                                    dismissible variant="danger">
                                    <p>
                                        {this.state.error}
                                    </p>
                                </Alert>
                            </Col>
                    </Form.Group>
                    :   <div></div>
                }
            </Form>
        )
    }
}

export default SignInForm
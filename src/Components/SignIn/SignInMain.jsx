import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import  { FirebaseContext } from '../Firebase'
import SignInForm from './SignInForm.jsx'


class SignInMain extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => (
                    <Container>
                        <Row className="text-center">
                            <Col 
                            lg={{ span: 6, offset: 3 }}>
                                <SignInForm firebase={firebase}/>
                            </Col>
                        </Row>
                    </Container>
                )}
            </FirebaseContext.Consumer>
            
        )
    }
}

export default SignInMain
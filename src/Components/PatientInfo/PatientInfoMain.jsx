import React, { Component } from 'react'
import firebase from 'firebase/app'
import { withRouter } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import PatientInfoSection from './PatientInfoSection.jsx'
import Container from 'react-bootstrap/Container';

class PatientInfoMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientData: Object.create(null)
        }
    }

    componentDidMount() {
        const db = firebase.firestore()
        const { patientId } = this.props.match.params
        let patientData = Object.create(null)
        db.collection("patients").doc(`${patientId}`)
            .onSnapshot(doc => {
                patientData = doc.data()
                this.setState({ patientData })
            });
            
    }

    render() {
        const { patientData } = this.state
        if(!Object.keys(patientData).length) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <PatientInfoSection patientData={patientData} />
            )
        }
    }
}

export default withRouter(PatientInfoMain)
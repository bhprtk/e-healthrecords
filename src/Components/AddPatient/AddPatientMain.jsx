import React , { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import PatientInfoForm from './PatientInfoForm.jsx'

class AddPatientMain extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showModal: false,
            patientInfo: {}
        }

        this._hideModal = this._hideModal.bind(this)      
        this._showModal = this._showModal.bind(this)      
        this._submitPatientInfo = this._submitPatientInfo.bind(this)      
    }

    _hideModal() {
        this.setState({ showModal: false })
    }

    _showModal() {
        this.setState({ showModal: true })
    }

    _submitPatientInfo(formValues) {
        // alert("under construction")
        // const { db } = this.props.firebase
        // console.log('db', db)
//         var docRef = db.collection('users').doc('alovelace');

// var setAda = docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });
  
    }

    render() {
        return (
            <>
                <Button 
                    onClick={this._showModal}
                    style={{
                        marginRight: 10
                    }}
                    variant="outline-light">
                    Add Patient
                </Button>

                <Modal
                    size="lg"
                    show={this.state.showModal} 
                    onHide={this._hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Patient Info</Modal.Title>
                    </Modal.Header>
                    <PatientInfoForm 
                        hideModal={this._hideModal} 
                        submitPatientInfo={this._submitPatientInfo} />
                </Modal>
            </>
        )
    }
}

export default AddPatientMain
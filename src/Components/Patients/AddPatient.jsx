import React, { Component } from 'react'

import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/PersonAdd';


import firebase from 'firebase/app'


// import PatientInfoForm from './PatientInfoForm.jsx'
import PatientInfoForm from '../AddPatient/PatientInfoForm.jsx'
import Modal from 'react-bootstrap/Modal'

const styles = theme => ({
    dialog: {
        padding: 20,
    },
    addIcon: {
        color: '#fff',
        backgroundColor: 'red',
    },
    listItem: {
        backgroundColor: '#f5f5f5'
    }
})

class AddPatient extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            openDialog: false,
            showModal: false,
            patientInfo: {}
        }

        this._closeDialog = this._closeDialog.bind(this)
        this._openDialog = this._openDialog.bind(this)
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

    _submitPatientInfo(basicInfo) {
        const db = firebase.firestore()
        db.collection("patients").add({
            basicInfo
        })
        .then(function(docRef) {
            return
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        this._hideModal()
    }

    _openDialog() {
        this.setState({ openDialog: true })
    }

    _closeDialog() {
        this.setState({ openDialog: false })
    }

    render() {
        const { classes } = this.props
        return (
            <>
                <ListItem 
                    className={classes.listItem}
                    onClick={this._showModal}
                    button>
                    <Avatar 
                        className={classes.addIcon}
                    >
                        <AddIcon />
                    </Avatar>
                    <ListItemText>
                        <strong>Add Patient</strong>
                    </ListItemText>
                </ListItem>

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
                {/* <Dialog
                    classes={{ paper: classes.dialog }}
                    open={this.state.openDialog}
                    onClose={this._closeDialog}>

                    <DialogTitle className="text-center">Enter Patient Info</DialogTitle>

                    <PatientInfoForm />
                </Dialog> */}
            </>
        )
    }
}

export default withStyles(styles)(AddPatient)
import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from '@material-ui/core/ListItemText';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from 'react-router-dom'

class PatientListItem extends Component {
    constructor(props) {
        super(props)

        this._gotoPatient = this._gotoPatient.bind(this)
    }

    _gotoPatient() {
        const { history, patientId, match } = this.props
        history.push(`/patient/${patientId}`)
    }

    render() {
        const patient = this.props.patient.basicInfo
        return (
            <ListItem 
                button
                onClick={this._gotoPatient}>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                <ListItemText 
                    primary={`${patient.firstName} ${patient.lastName}`} 
                    secondary={
                        <React.Fragment>
                            <span>{patient.email}</span>
                            <br />
                            <span>{patient.mobilePhone}</span>
                        </React.Fragment>
                    } />
            </ListItem>
        )
    }
}

export default withRouter(PatientListItem)
import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

class PatientBasicInfoCard extends Component {

    _getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age
    }

    render() {
        const patient = this.props.patientData.basicInfo
        const age = this._getAge(patient.birthDate)
        return(
            <ListItem>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                <ListItemText 
                    primary={`${patient.firstName} ${patient.lastName}`} 
                    secondary={`${patient.gender}, ${age} years old`} />
          </ListItem>
        )
    }
}

export default PatientBasicInfoCard
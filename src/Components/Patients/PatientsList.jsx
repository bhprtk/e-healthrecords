import React, { Component } from 'react'
import List from '@material-ui/core/List';

import AddPatient from './AddPatient.jsx'
import DisplayAllPatientsMain from '../DisplayAllPatients/DisplayAllPatientsMain.jsx'

class PatientsList extends Component {
    render() {
        return( 
            <List>
                <AddPatient />
                <DisplayAllPatientsMain />
            </List>
        )
    }
}

export default PatientsList
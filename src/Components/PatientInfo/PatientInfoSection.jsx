import React, { Component } from 'react'

import PatientBasicInfoCard from './PatientBasicInfoCard.jsx'
import PatientInfoMenu from './PatientInfoMenu.jsx'

class PatientInfoSection extends Component {
    render() {
        const { patientData } = this.props
        return (
            <div>
                <PatientBasicInfoCard patientData={patientData} />
                <PatientInfoMenu patientData={patientData} />
            </div>
        )
    }
}

export default PatientInfoSection
import React, { Component } from 'react'
import firebase from 'firebase/app'

import PatientListItem from './PatientListItem.jsx'

class DisplayAllPatientsMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            patientList: Object.create(null)
        }
    }

    componentDidMount() {
        const db = firebase.firestore()
        db.collection("patients")
            .onSnapshot(querySnapshot => {
                let patientList = Object.create(null)
                querySnapshot.forEach(doc => {
                    patientList[doc.id] = doc.data()
                })
                this.setState({ patientList })
            })
    }

    render() {
        const { patientList } = this.state
        console.log('patientList', patientList)
        console.log('!Object.keys(patientList).length', Object.keys(patientList).length)
        if(!Object.keys(patientList).length) {
            return (
                <div>loading...</div>
            )
        } else {
            return (
                <div>
                    {Object.keys(patientList).map((patientId, index) => (
                        <PatientListItem 
                            key={index}
                            patientId={patientId}
                            patient={patientList[patientId]} />
                        
                    ))}
                </div>

            )
        }
    }
}

export default DisplayAllPatientsMain
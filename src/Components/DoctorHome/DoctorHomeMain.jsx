import React , { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';


// import PatientsMain from '../Patients/PatientsMain.jsx'

import { withRouter } from 'react-router-dom'

const styles = theme => ({
    list: {
        flexShrink: 0,
    },
    drawer: {
        background: '#3F555D',
        width: 250,
    },
    icon: {
        color: '#fff'
    },
    text: {
        color: '#9BA4A8',
        fontSize: 14,
        // color: '#D4D7D8',
        marginLeft: -10
    },
    content: {
        flexGrow: 1,
        paddingLeft: 250
    }
  });

class DoctorHomeMain extends Component {

    constructor(props) {
        super(props)
        this._linkToPatients = this._linkToPatients.bind(this)
    }

    _linkToPatients = () => {
        this.props.history.push(`/patients`)
    }

    render() {
        const { classes } = this.props
        return (
            <div className="text-center"><h1>home</h1></div>
        )
    }
}

// export default DoctorHomeMain
export default withStyles(styles)(withRouter(DoctorHomeMain));

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// COMPONENTS

import SignInMain from './Components/SignIn/SignInMain.jsx'
import DoctorHomeMain from './Components/DoctorHome/DoctorHomeMain.jsx'
import PatientsMain from './Components/Patients/PatientsMain.jsx'
import PatientInfoMain from './Components/PatientInfo/PatientInfoMain.jsx'
import NavigationMain from './Components/Navigation/NavigationMain.jsx'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen.jsx'
import { AuthUserContext } from './Components/Session';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: 'no-user' })
    })
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    if(!this.state.authUser) {
      return (<LoadingScreen />)
    } else if(this.state.authUser === 'no-user') {
      return (
        <SignInMain />
      )
    } else {
      return(
        <Router>
          <AuthUserContext.Provider value={this.state.authUser}>
            {/* <Container> */}
            <Row style={{
              // background: 'green'
            }}>
                <NavigationMain />
              
              
              <div style={{
                // background: 'yellow',
                // width: '100%'
              }}>
                <Route exact path="/" component={DoctorHomeMain} />
                <Route path="/patients" component={PatientsMain}/>
                <Route path="/patient/:patientId" component={PatientInfoMain}/>

              </div>
              

            </Row>

            {/* </Container> */}
          </AuthUserContext.Provider>

        </Router>
      )
    }
  }
}

export default App;

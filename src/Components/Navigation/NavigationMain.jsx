import React , { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import {
    BrowserRouter as Router,
  } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EventIcon from '@material-ui/icons/Event';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

// import PatientsMain from '../Patients/PatientsMain.jsx'

import { withRouter } from 'react-router-dom'

const styles = theme => ({
    root: {
        position: 'fixed'
    },
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

  class NavigationMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: {
                search: false,
                dashboard: false,
                patients: false,
                appointments: false
            }
        }

        this._linkToHome = this._linkToHome.bind(this)
        this._linkToPatients = this._linkToPatients.bind(this)
    }

    _linkToHome = () => {
        this.setState({ selected: {
            search: false,
            dashboard: false,
            patients: false,
            appointments: false
        }})
        this.props.history.push(`/`)
    }

    _linkToPatients = () => {
        this.setState({ selected: { patients: true } })
        this.props.history.push(`/patients`)
    }

    render() {
        const { classes } = this.props
        return (
            <Router>
                <div style={{
                     background: '#3F555D',
                     width: 250,
                     height: '100vh',
                     paddingLeft: 20
                }}>
                    {/* <NavBarMain firebase={this.props.firebase} /> */}
                        



                    {/* <Drawer
                        classes={{ paper: classes.drawer }}
                        variant="permanent"
                        anchor="left"> */}
                        
                        <div
                            onClick={this._linkToHome}
                            style={{
                                color: '#fff',
                                padding: 10,
                                cursor: 'pointer'
                            }}>
                            <LocalHospitalIcon fontSize="large" color="error"/> NepalEMR
                        </div>

                        <List>
                            {/* <ListItem button>
                                <ListItemIcon
                                    className={classes.icon}>
                                    <SearchIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.text }} primary="Search" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon
                                    className={classes.icon}>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.text }} primary="Dashboard" />
                            </ListItem> */}
                            <ListItem 
                                selected={this.state.selected.patients}
                                button 
                                onClick={this._linkToPatients}>
                                <ListItemIcon
                                    className={classes.icon}>
                                    <SupervisorAccountIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.text }} primary="Patients" />
                            </ListItem>
                            {/* <ListItem button>
                                <ListItemIcon
                                    className={classes.icon}>
                                    <EventIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.text }} primary="Appointments" />
                            </ListItem> */}
                        </List>

                    {/* </Drawer> */}

                </div>
            </Router>
        )
    }
  }

  export default withStyles(styles)(withRouter(NavigationMain));

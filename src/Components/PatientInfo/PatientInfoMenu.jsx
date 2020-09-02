import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import ContactInfoPage from '../ContactInfoPage/ContactInfoPage.jsx'

const styles = theme => ({
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
        borderTop: '1px solid #e8e8e8',
        border: 'none',
        outline: 'none'
    },
    tabsIndicator: {
        backgroundColor: '#3F555D',
    },
    tabRoot: {
        textTransform: 'initial',
        '&:hover': {
          color: '#3F555D',
          opacity: 1,
        },
        '&$tabSelected': {
          color: '#3F555D',
        },
        '&:focus': {
          color: '#3F555D',
          outline: 0
        },
      },
    tabSelected: {}
})


class PatientInfoMenu extends Component {
    state = {
        value: 0,
      }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { classes } = this.props;
        return(
            <div>
                <Tabs 
                    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    value={value} 
                    onChange={this.handleChange}>
                    <Tab
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        disableRipple 
                        label="Clinical Info" />
                    <Tab
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        disableRipple 
                        label="Contact Info" />
                </Tabs>
            
                {value === 0 && <div>Item One</div>}
                {value === 1 && <ContactInfoPage basicInfo={this.props.patientData.basicInfo}/>}
            
            </div>
        )
    }
}

export default withStyles(styles)(PatientInfoMenu)
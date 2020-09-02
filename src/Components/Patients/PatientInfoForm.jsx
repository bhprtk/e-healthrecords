import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { InlineDatePicker } from 'material-ui-pickers';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';




class PatientInfoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: null,
            gender: ''
        }

        this._onDateChange = this._onDateChange.bind(this)
    }

    _onDateChange(date) {
        this.setState({ selectedDate: date })
    }

    render() {
        return (
            <form noValidate autoComplete="off">
                <Row>
                    <Col>
                        <TextField
                            required
                            // id="outlined-email-input"
                            label="First Name"
                            type="text"
                            name="firstName"
                            autoComplete="firstName"
                            margin="normal"
                            variant="outlined" />
                    </Col>
                    <Col>
                        <TextField
                            // id="outlined-email-input"
                            label="Middle Name"
                            type="text"
                            name="middleName"
                            autoComplete="middleName"
                            margin="normal"
                            variant="outlined" />
                    </Col>
                    <Col>
                        <TextField
                            required
                            // id="outlined-email-input"
                            label="Last Name"
                            type="text"
                            name="lastName"
                            autoComplete="lastName"
                            margin="normal"
                            variant="outlined" />
                    </Col>

                </Row>
                <br/>
                <Row>
                    <Col>
                        <InlineDatePicker
                            keyboard
                            disableFuture
                            variant="outlined"
                            format='MM/DD/YYYY'
                            label="Birth Date"
                            value={this.state.selectedDate}
                            onChange={this._onDateChange}
                        />
                    </Col>
                    <Col>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                            value={this.state.gender}
                            onChange={this._onGenderChange}
                            input={
                                <OutlinedInput
                                    labelWidth={0}
                                    name="gender"
                                    id="gender"
                                />
                            }
                        >
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                        </Select>
                    </Col>

                </Row>
                <br/>
                <Row>
                    <Col>
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />


                    </Col>
                    <Col>
                        <TextField
                            label="Mobile Phone"
                            type="tel"
                            name="mobilePhone"
                            autoComplete="tel"
                            margin="normal"
                            variant="outlined"
                        />


                    </Col>
                </Row>
            </form>
        )
    }
}

export default PatientInfoForm
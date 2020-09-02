import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    button: {
        cursor: 'pointer',
        color: 'green',
        '&:focus': {
            outline: 0
        },
        '&:hover': {
            fontWeight: 'bold'
        }

    },
    resize: {
        fontSize: 14,
        marginTop: -15
    }
  });

class DisplayHomePhone extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openInput: false
        }

        this._openInput = this._openInput.bind(this)
        this._closeInput = this._closeInput.bind(this)
        
    }

    _openInput() {
        this.setState({ openInput: true })
    }

    _closeInput() {
        this.setState({ openInput: false })
    }

    render() {
        const { homePhone, classes } = this.props
        if(homePhone) {
            return (
                <p>
                    {homePhone}
                </p>
            )
        } else {
            if(this.state.openInput) {
                return (
                    <TextField
                        InputProps={{
                            classes: {
                                input: classes.resize,
                            },
                        }}
                        autoComplete="tel"
                        placeholder="Enter Home Phone"
                        type="tel"
                        margin="normal"
                        />
                )
            } else {
                return (
                    <p  
                        onClick={this._openInput}
                        className={classes.button} 
                        color="green">
                        + Add
                    </p>
                )
            }
        }
    }
}

export default withStyles(styles)(DisplayHomePhone);

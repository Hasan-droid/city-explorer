import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
 class Alert_message extends Component {
    render() {
        return (
            <div>
                {
                    this.props.alert &&
                    <Alert variant="danger">
                        Error : Wrong Input! try again
                    </Alert>
                }
            </div>
        )
    }
}

export default Alert_message

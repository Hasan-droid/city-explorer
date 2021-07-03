import React, { Component } from 'react'

class weather extends Component {
    render() {
        return (

                <tr>
                    <td>{this.props.date}</td>
                    <td>{this.props.desc}</td>
                </tr>

        )
    }
}

export default weather;

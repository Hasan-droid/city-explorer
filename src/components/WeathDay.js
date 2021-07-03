
import React, { Component } from 'react'

 class WeathDay extends Component {
    render() {
        return (
           
               
                 <tr>
                    <td>{this.props.date}</td>
                    <td>{this.props.desc}</td>
                </tr> 
               
           
        )
    }
}

export default WeathDay;

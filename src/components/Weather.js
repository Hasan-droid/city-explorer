import React, { Component } from 'react'

 class weather extends Component {
    render() {
        return (
            <div>
              <h1>{this.props.date}</h1>
              <h1>{this.props.desc}</h1>  
            </div>
        )
    }
}

export default weather;

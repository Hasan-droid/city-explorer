import {  Image} from 'react-bootstrap'
import React, { Component } from 'react'

 class Map extends Component {
    render() {
        return (
            <div>
                {this.props.displayData &&
                    <div>
                        <p>
                            {this.props.cityData.display_name}
                        </p>

                        <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`} rounded />
                        <p>
                            {`latitude: ${this.props.cityData.lat}, longitude: ${this.props.cityData.lon}`}
                        </p>
                    </div>
                }  
            </div>
        )
    }
}

export default Map

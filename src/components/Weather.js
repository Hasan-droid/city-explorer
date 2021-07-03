import React, { Component } from 'react'
import { Form, Button, Image, Table , CardGroup , CardColumns} from 'react-bootstrap'
import WeathDay from './WeathDay';

class weather extends Component {
    render() {
        return (
            <div>
              
                {this.props.weatherdata[0] &&

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>date</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        {this.props.weatherdata.map(item => {
                            return (
                                <tbody>
                                    <WeathDay desc={item.description} date={item.valid_data} />
                                </tbody>
                            )

                        })
                        }
                    </Table>
                }
            </div>
        )
    }
}

export default weather;

import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

 class Movie extends Component {
    render() {
        return (
            <>
                {this.props.img &&
            <Card style={{ width: '18rem', margin: '10px', backgroundColor: 'black', color: 'white' }}>
                <Card.Title>{this.props.title}</Card.Title>

                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>

                    <Card.Text>
                        votes : {this.props.vote}
                    </Card.Text>

                </Card.Body>
            </Card>
        }
</>
        )
    }
}

export default Movie

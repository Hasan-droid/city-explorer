import React, { Component } from 'react'
import { CardColumns} from 'react-bootstrap'
import Movie from './Movie'

class Movies extends Component {
    render() {
        return (
            <CardColumns>
                    {this.props.moviesData.map(item => {
                        return <Movie title={item.original_title} img={item.poster_path} vote={item.vote_count} />
                    })
                    }
</CardColumns>
           
        )
    }
}

export default Movies

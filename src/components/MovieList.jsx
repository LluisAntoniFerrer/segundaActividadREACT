import React from 'react';
import { Link } from 'react-router-dom';
import { Card , CardDeck} from 'react-bootstrap';
const { Meta } = Card;


function MovieList({ movies }) {
   

    return (
        <CardDeck style={{ margin: '15px' }}>
            {movies.map(movie => (
                <Link to={'/movie/' + movie.id}>
                    <Card bg="dark" text="white"  style={{ width: '16rem', margin: '15px' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} style={{maxHeight: '300px', overflow: 'hidden', resizeMode : 'cover'}}/>
                        <Card.Body>
                            <Card.Title> {movie.title} </Card.Title>
                            <Card.Text>
                                {movie.release_date}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            ))}
        </CardDeck>
    );
}

export default MovieList
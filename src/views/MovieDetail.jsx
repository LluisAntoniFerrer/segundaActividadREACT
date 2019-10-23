import React from 'react';
import apiService from '../services/ImdbApi.service';
import { Spinner, Alert, Media } from 'react-bootstrap';
import '../CSS/MovieDetail.css'
class MovieDetail extends React.Component {
  state = {
    movie: null,
    loading: false,
    error: false,
  };
  constructor(p) {
    super(p);
    this.componentDidMount = this.getMovie;
    this.componentDidUpdate = this.getMovie;
  }

  async getMovie() {
    const currentMovieId = this.props.match.params.id;
    if (currentMovieId !== this.state.currentMovieId && !this.state.loading) {
      this.setState({ loading: true, error: false });
      try {
        const data = await apiService.getMovieById(currentMovieId);
        console.log(data);

        this.setState({
          movie: data,
          currentMovieId,
          loading: false,
          error: false,
        });
      } catch {
        this.setState({
          loading: false,
          currentMovieId,
          error: 'Fail fetching movie',
        });
      }
    }
  }

  render() {
    // console.log(this.props.match.params);
    const { loading, movie, error } = this.state;

    return (
      <div className='MovieDetail'>
        {error && (
          <Alert variant="danger">{this.state.error}</Alert>
        )}

        {loading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '2em',
            }}
          >
            <Spinner animation="border" />
          </div>
        )}

        {movie && (
          <div movie={movie}>
            <Media>
              <img
                width={240}
                height={300}
                className="mr-3"
                src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
              />
              <Media.Body>
                <h3>{movie.title} ({movie.release_date})</h3>
                <p>
                  {movie.overview}
                </p>
              </Media.Body>
            </Media>

            <div>
              {movie.vote_average}
            </div>
            {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetail;
import React from 'react';
import apiService from '../services/ImdbApi.service';
import MovieList from '../components/MovieList';
import { Spinner, Alert } from 'react-bootstrap';


class MoviesCategory extends React.Component {
  state = {
    movies: [],
    currentCategory: '',
    loading: false,
    error: false,
  };
  constructor(p) {
    super(p);
    this.componentDidMount = this.getMovies;
    this.componentDidUpdate = this.getMovies;
  }

  async getMovies() {
    const currentCategory = this.props.match.params.categoryName;
    if (currentCategory !== this.state.currentCategory && !this.state.loading) {
      this.setState({ loading: true, error: false });
      try {
        const data = await apiService.getMoviesByCategory(currentCategory);
        this.setState({
          movies: data.results,
          currentCategory,
          loading: false,
          error: false,
        });
      } catch {
        this.setState({
          loading: false,
          currentCategory,
          error: 'Fail fetching movies',
        });
      }
    }
  }

  render() {
    // console.log(this.props.match.params);

    return (
      <div className='MoviesCategory' style={{marginTop:'30px'}}>
        {this.state.error && (
          <Alert variant="danger">{this.state.error}</Alert>
        )}
        {this.state.loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '2em',
            }}
          >
            <Spinner animation="border" />
          </div>
        ) : (
           <MovieList movies={this.state.movies}/>
        )}
      </div>
    );
  }
}

export default MoviesCategory;
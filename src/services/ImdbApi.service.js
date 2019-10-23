import axios from 'axios';

class ApiService {
  constructor() {
    this.APIKEY = '323112ea2281b9eb70f319f4df422c6b';
  }
  async getMoviesByCategory(category, page = 1) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${this.APIKEY}&language=es-ES&page=${page}`,
    );
    return data;
  }
  async getMovieById(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.APIKEY}&language=es-ES`,
    );
    return data;
  }
}

export default new ApiService();
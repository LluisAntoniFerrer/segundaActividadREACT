import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import MoviesCategory from './views/MoviesCategory'
import MovieDetail from './views/MovieDetail'
import NavBar from './components/NavBar'
import Error_404 from './views/Error_404'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path='/category/:categoryName'
            exact
            component={MoviesCategory}
          />
          <Route path='/movie/:id' exact component={MovieDetail} />
          <Redirect path='/' exact to='category/upcoming' />
          <Route component={Error_404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

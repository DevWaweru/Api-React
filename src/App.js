import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchMovies from './components/fetch';
import Movie from './components/movie';
import { getMovies } from "./services/movieService";
import './App.css';

class App extends Component {
  state = {
    isLoaded: false,
    movies: [],
    currentPage: 2,
  };
  async componentDidMount() {
    const { data } = await getMovies();
    this.setState({ isLoaded: true, movies: data.results });
  }
  getMoreMovies = async() => {
    const { currentPage, movies: moviesData } = this.state;
    const { data } = await getMovies(currentPage);
    const movies = [...moviesData, ...data.results];
    this.setState({ movies, currentPage: currentPage+1 });
  }
  render() {
    const { movies, isLoaded } = this.state;
    return (
      <React.Fragment>
        <main className='container-fluid p-0'>
          <Switch>
            <Route path='/movie/:id' component={Movie} />
            <Route exact path='/' render={props => <FetchMovies {...props} movies={movies} isLoaded={isLoaded} onGetMore={this.getMoreMovies} />}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

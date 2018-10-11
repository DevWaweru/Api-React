import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import FetchMovies from './components/fetch';
import Movie from './components/movie';
import { getMovies } from "./services/movieService";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = { isLoaded: false, movies: [], currentPage: 2 };

  async componentDidMount() {
    const { data } = await getMovies();
    console.log(data);
    this.setState({ isLoaded: true, movies: data.results });
  }

  getMoreMovies = async() => {
    const { currentPage, movies: moviesData } = this.state;
    try {
      const { data } = await getMovies(currentPage);
      const movies = [...moviesData, ...data.results];
      this.setState({ movies, currentPage: currentPage+1 });
      toast.success('More movies added');   
    } catch (error) {
      toast.error(error); 
    }
  }

  getSingleMovie = (movieId = "111") => {    
    const { movies } = this.state;    
    const movie = movies.filter(m => m.id.toString() === movieId);     
    return movie;
  }

  render() {
    const { movies, isLoaded } = this.state;
    return (
      <React.Fragment>
        <ToastContainer/>
        <main className='container-fluid p-0'>
          <Switch>
            <Route path='/movie/:id' render={props => <Movie {...props} movie={this.getSingleMovie} />}  />
            <Route exact path='/' render={props => <FetchMovies {...props} movies={movies} isLoaded={isLoaded} onGetMore={this.getMoreMovies} />}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

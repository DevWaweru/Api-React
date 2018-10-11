import React, { Component } from "react";
import { getMovies } from "../services/movieService";
import './fetch.css';

class FetchMovies extends Component {
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
    var { isLoaded, movies } = this.state;
    if (!isLoaded) {
      return (
        <div
          style={{
            position: "absolute",
            margin: "auto",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignmovies: "center"
          }}
        >
          <h1>Loading... </h1>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row">
            {movies.map(item => (
              <div className="col-md-3 p-0" key={item.id}>
                <a href="#">
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="movie-poster" />
                </a>
              </div>
            ))}
            <div className="col-md-12 p-0 add-more">
              <button onClick={this.getMoreMovies} className="btn btn-primary">+</button>
            </div>
          </div>
        </div> //{item.title} | {item.vote_average} | {item.overview} this.posterPath(item.poster_path)
      );
    }
  }
}

export default FetchMovies;

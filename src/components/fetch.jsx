import React, { Component } from "react";
import { Link } from 'react-router-dom';

class FetchMovies extends Component {

  render() {
    var { isLoaded, movies, onGetMore } = this.props;
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
                <Link to={`/movie/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="movie-poster" />
                </Link>
              </div>
            ))}
            <div className="col-md-12 p-0 add-more">
              <button onClick={onGetMore} className="btn btn-primary">+</button>
            </div>
          </div>
        </div> //{item.title} | {item.vote_average} | {item.overview} this.posterPath(item.poster_path)
      );
    }
  }
}

export default FetchMovies;

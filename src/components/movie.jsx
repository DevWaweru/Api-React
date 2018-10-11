import React, { Component } from 'react';

class Movie extends Component {   
    render() {
        const data = this.props.movie(this.props.match.params.id);
        if (data.length > 0){
            const { title, backdrop_path, poster_path, release_date, overview, popularity, vote_average, vote_count } = data[0];
            console.log(data[0]);
            return ( 
                <React.Fragment>
                    <div className="row p-0 m-0">
                        <div className="col-md-12 p-0">
                            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="Loading..." className="backdrop-responsive"/> 
                            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="Loading..." className="poster-responsive"/>                             
                            <div className="poster"></div>
                            <h1 className="poster-text">{title}</h1>
                        </div>                       
                    </div>
                    <div className="container mt-5 pt-4 mb-5">
                        <div className="row">
                            <div className="col-md-5 mr-4 movie-info">
                                <h4 className="text-center">Info</h4>
                                <table className="table mb-4">
                                    <tbody>
                                        <tr>
                                            <th>Release Date</th>
                                            <td>{release_date}</td>
                                        </tr>
                                        <tr>
                                            <th>Popularity</th>
                                            <td>{popularity}</td>
                                        </tr>
                                        <tr>
                                            <th>Vote Average</th>
                                            <td>{vote_average}/10</td>
                                        </tr>
                                        <tr>
                                            <th>Vote Count</th>
                                            <td>{vote_count}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 pt-4">
                                <h4 className="text-center">Overview</h4>
                                <p>{overview}</p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        else return null;

    }
}
 
export default Movie;
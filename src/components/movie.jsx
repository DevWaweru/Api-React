import React, { Component } from 'react';

class Movie extends Component {
    componentDidMount() {
        console.log(this.props);        
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <h1>Movie</h1>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movie;
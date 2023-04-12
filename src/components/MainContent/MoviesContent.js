import React, { Fragment , useState, useEffect } from 'react';
import '../../../src/App.css';
import MoviesList from './MoviesList';
import Title from './Title';


const MoviesContent = (props) => {
//   console.log(props.movies);
    return (
        <Fragment>
            <Title />
            <MoviesList movies={props.movies}/>
        </Fragment>
    );
}
export default MoviesContent;
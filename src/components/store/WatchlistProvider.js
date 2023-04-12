import WatchlistCartContext from "./watchlist-cart-context";
import { useReducer , useState} from "react";

const defaultWatchlistState={
    movieItemsArray : [],
    totalMovies: 0,
}

const watchlistReducer=(state, action)=>{
    if(action.type==='ADD'){
        const existingMovieItemIndex=state.movieItemsArray.findIndex(movie=> movie.title===action.movie.title); // true or false , return index of item if exists
        const existingMovieItem= state.movieItemsArray[existingMovieItemIndex]; // null if no index found
        let updatedMoviesList ,  updatedTotalMovies;
        if(existingMovieItem){
            updatedMoviesList=state.movieItemsArray;
            updatedTotalMovies=state.totalMovies;
        }
        else{

           updatedMoviesList= [...state.movieItemsArray];
           updatedMoviesList.push(action.movie);
           updatedTotalMovies = state.totalMovies+1 ;
        }
        console.log('inside add reducer ');
        console.log(updatedMoviesList);
      return {
           movieItemsArray: updatedMoviesList,
           totalMovies: updatedTotalMovies
      };
    }
    if(action.type==='REMOVE'){
            const updatedMoviesList=state.movieItemsArray.filter(movie=> movie.title !==action.title); 
            const updatedTotalMovies=state.totalMovies-1;
       
      return {
           movieItemsArray: updatedMoviesList,
           totalMovies: updatedTotalMovies
      };
    }
    return defaultWatchlistState;
}

const WatchlistProvider=(props)=>{
    
    const [watchlistState,dispatchWatchlistAction]= useReducer(watchlistReducer, defaultWatchlistState);
    const addMovieToWatchlistHandler = movie => {
        dispatchWatchlistAction({ type: 'ADD', movie: movie });
    }
    const removeMovieFromWatchlistHandler = title => {
        dispatchWatchlistAction({ type: 'REMOVE', title: title });
    }
    const watchlistCartContext = {
        movieItemsArray : watchlistState.movieItemsArray,
        totalMovies: watchlistState.totalMovies,
        addMovie:  addMovieToWatchlistHandler,
        removeMovie: removeMovieFromWatchlistHandler,
    }

    return (
      <WatchlistCartContext.Provider value={watchlistCartContext}>
          {props.children}
      </WatchlistCartContext.Provider>
    );
}
export default WatchlistProvider;
import React from 'react';

const WatchlistCartContext=React.createContext({
   movieItemsArray : [],
   totalMovies: 0,
   addMovie: (movie)=>{

   },
   removeMovie: (imdbid)=>{
    
   }
});
export default WatchlistCartContext;


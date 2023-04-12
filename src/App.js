import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { Fragment, useState } from 'react';
import MoviesContent from './components/MainContent/MoviesContent';
import p1 from '../src/assets/1.jpeg';

import p5 from '../src/assets/5.jpeg';
import p6 from '../src/assets/6.jpeg';
import p7 from '../src/assets/7.jpeg';
import p8 from '../src/assets/8.jpeg';
import p9 from '../src/assets/9.jpeg';
import p10 from '../src/assets/10.jpeg';
import p11 from '../src/assets/11.jpeg';
import p12 from '../src/assets/12.jpeg';
import p13 from '../src/assets/13.jpeg';
import p14 from '../src/assets/14.jpeg';
import p15 from '../src/assets/16.jpeg';
import p16 from '../src/assets/17.jpeg';
import p17 from '../src/assets/19.jpeg';
import p18 from '../src/assets/20.jpeg';
import p19 from '../src/assets/21.jpeg';
import p20 from '../src/assets/22.jpeg';
import p21 from '../src/assets/23.jpeg';
import p22 from '../src/assets/24.jpeg';
import p23 from '../src/assets/25.jpeg';
import p24 from '../src/assets/26.jpeg';
import p25 from '../src/assets/28.jpeg';
import p26 from '../src/assets/29.jpeg';
import p27 from '../src/assets/30.jpeg';
import p28 from '../src/assets/31.jpeg';
import p29 from '../src/assets/32.jpeg';
import Watchlist from './components/WatchList/Watchlist';
import WatchlistProvider from './components/store/WatchlistProvider';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageIndexArray = [p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p1, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29];

  const [toShowWatchlist, setToShowWatchlist] = useState(false);

  const showWatchlistHandler = () => {
    setToShowWatchlist(true);
  }
  const hideWatchlistHandler = () => {
    setToShowWatchlist(false);
  }
  function fetchMoviesHandler(movieName) {
    setIsLoading(true);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9564c37aaamsh5b952c9573ca636p1705cdjsn3bc13d3dbe43',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${movieName}&country=us&type=movie&output_language=en`, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data.result);
        const loadedMovies = [];

        for (const key in data.result) {
          // console.log(data.result[key]);
          let x = randomIntFromInterval(0, 25);

          loadedMovies.push({
            key: key,
            imdbid: data.result[key].imdbId,
            imageurl: imageIndexArray[x],
            title: data.result[key].title,
            synopsis: data.result[key].overview,
            released: data.result[key].year,
            imdb: data.result[key].imdbRating
          })
        }
        // console.log(loadedMovies);
        setMovies(loadedMovies);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }
  return (
    <WatchlistProvider>
      <main>
        {toShowWatchlist && <Watchlist onHideWatchlist={hideWatchlistHandler} />}
        <Navbar onFetchMovie={fetchMoviesHandler} onShowWatchlist={showWatchlistHandler} />
        {isLoading && <p> Loading...</p>}
        {!isLoading && <MoviesContent movies={movies} />}
      </main>
    </WatchlistProvider>

  );
}

export default App;

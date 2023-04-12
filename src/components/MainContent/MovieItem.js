import '../../../src/App.css';
import React, { useState } from 'react';
import { useContext } from 'react';
import WatchlistCartContext from '../store/watchlist-cart-context';


const MovieItem = (props) => {

  const cartCtx = useContext(WatchlistCartContext);
  const addMovieHandler = () => {
    console.log("added movie title is ", props.title);
     cartCtx.addMovie({
      imdbid: props.imdbid,
      title: props.title,
      synopsis: props.synopsis,
      imdb: props.imdb,
      released: props.released
     });
  }

  const [toShowFullPara, setToShowFullPara] = useState(false);
  let desc = props.synopsis;
  let btnContent = 'Read More';
  //   const [btnContent , setBtnContent]= useState('Read More');
  const clickHandler = () => {
    setToShowFullPara(!toShowFullPara);
  }
  if (toShowFullPara === true) {
    btnContent = 'Show Less';
    // setBtnContent('Show Less');
    desc = props.synopsis;
  }
  else {
    // toShowFullPara is False
    if (desc.trim().length > 135) {
      desc = desc.slice(0, 135);
      desc = desc + '...';
    }
  }


  return (

    <article className="single-tour">
      <img src={props.imageurl} alt={props.title} className='img' />
      <span className='tour-price'>{props.released} ({props.imdb / 10})</span>
      <div className='tour-info'>
        <h5> {props.title}</h5>
        <p>
          {desc}
          <button className='info-btn' onClick={clickHandler}>{btnContent}</button>
        </p>
        <button className='delete-btn btn-block btn' onClick={addMovieHandler}> Add To Watchlist</button>
      </div>
    </article>
  )
}
export default MovieItem;
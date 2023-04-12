import Modal from "./Modal";
import ModalMovieItem from "./ModalMovieItem";
import classes from './Watchlist.module.css';
import { useContext } from "react";
import WatchlistCartContext from "../store/watchlist-cart-context";

const DUMMY_MOVIES = [
  {
      imdbid: 'm1',
      title: 'This is 1st Picture',
      synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
      released: '2018',
      imdb:'73'
  },
  {
      imdbid: 'm2',
      title: 'This is 2nd Picture',
      synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
      released: '2019',
      imdb:'92'
  },
  {
      imdbid: 'm3',
      title: 'This is 3rd Picture',
      synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
      released: '2020',
      imdb:'69'
  },
  {
      imdbid: 'm4',
      title: 'This is 4th Picture',
      synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
      released: '2021',
      imdb:'56'
  },
  {
      imdbid: 'm5',
      title: 'This is 5th Picture',
      synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
      released: '2022',
      imdb:'85'
  }
];

// imdbid: props.imdbid,
// title: props.title,
// synopsis: props.synopsis,
// imdb: props.imdb,
// released: props.released



const Watchlist = (props) => {
  const cartctx= useContext(WatchlistCartContext);
    
  const removeMovieHandler=(title)=>{
    console.log("removed movie title is ", title);
     cartctx.removeMovie(title);
  }

  const content = <ul className={classes['cart-items']} >  { cartctx.movieItemsArray.map(
    (movie) => {
        return <ModalMovieItem
            key={movie.imdbid}
            title= {movie.title}
            onRemove={removeMovieHandler}
            imdbid={movie.imdbid}
            imdb={movie.imdb}
            synopsis={movie.synopsis}
            released={movie.released}
            />
    }
  ) } </ul>;

 

  return (
    <Modal onClose={props.onHideWatchlist} >
      {/* <div className={classes.modal}> */}
        {/* {cartItems}

        <div className={classes.total}>
          <span> Total Amount</span>
          <span> {totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}> Close</button>
          {hasItems && <button className={classes.button}> Order</button>}
        </div> */}
        {content}
      {/* </div> */}
    </Modal>
  );
}
export default Watchlist;
import classes from './ModalMovieItem.module.css';
const ModalMovieItem = (props) => {
    const removeTitleMovieHandler=()=>{
        props.onRemove(props.title);
    }
    return (
        <li className={classes['cart-item']}>
            <div>
                <h4>{props.title}</h4>
                <p>{props.synopsis}</p>
            </div>
            <button onClick={removeTitleMovieHandler}>Remove</button>
        </li>
    );
}
export default ModalMovieItem;
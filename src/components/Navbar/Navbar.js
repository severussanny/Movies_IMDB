import React, {useState} from 'react';
import '../../../src/App.css';
import logo from '../../../src/assets/logoMovie.jpg';
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = (props) => {
    const [toShowList , setToShowList]=useState(false);
    const height= toShowList? '120px':'0px';
    const clickHandler=()=>{
       if(toShowList===true)
       setToShowList(false);
       else
       setToShowList(true);
    }

    const inputChangeHandler=(event)=>{
       props.onFetchMovie(event.target.value);
    }
    return (
        
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className="logo" alt="logo"></img>
                    <button className='nav-toggle' onClick={clickHandler}>
                        <GiHamburgerMenu/>
                    </button>
                </div>
                <div className='links-container' style={{ height: height }}>
                    <ul className='links'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a onClick={props.onShowWatchlist}>Watchlist</a>
                        </li>
                    </ul>
                </div>
                <input type='text' className='search-bar' placeholder='Search movies..' onChange={inputChangeHandler}></input>
            </div>
        </nav>
    )
}
export default Navbar;
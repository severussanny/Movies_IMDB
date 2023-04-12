import '../../../src/App.css';
// import p2 from '../../assets/pic2.jpeg';
// import p3 from '../../assets/pic3.jpeg';
// import p4 from '../../assets/pic4.jpeg';
// import p5 from '../../assets/pic5.jpeg';
// import p6 from '../../assets/pic6.jpeg';
import MovieItem from './MovieItem';

const MoviesList = (props) => {
    // const DUMMY_MOVIES = [
    //     {
    //         imdbid: 'm1',
    //         imageurl: p2,
    //         title: 'This is first Picture',
    //         synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
    //         released: '2018',
    //         imdb:'73'
    //     },
    //     {
    //         imdbid: 'm2',
    //         imageurl: p3,
    //         title: 'This is first Picture',
    //         synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
    //         released: '2019',
    //         imdb:'92'
    //     },
    //     {
    //         imdbid: 'm3',
    //         imageurl: p4,
    //         title: 'This is first Picture',
    //         synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
    //         released: '2020',
    //         imdb:'69'
    //     },
    //     {
    //         imdbid: 'm4',
    //         imageurl: p5,
    //         title: 'This is first Picture',
    //         synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
    //         released: '2021',
    //         imdb:'56'
    //     },
    //     {
    //         imdbid: 'm5',
    //         imageurl: p6,
    //         title: 'This is first Picture',
    //         synopsis: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quisquam, nemo dicta minus esse iusto eligendi adipisci ratione voluptate cumque pariatur sequi assumenda, laboriosam magnam, a aspernatur quis earum! Earum!',
    //         released: '2022',
    //         imdb:'85'
    //     }
    // ];
    const content = props.movies.map(
        (movie) => {
            return <MovieItem
                key={movie.key}
                imbdid={movie.imdbid} 
                imageurl={movie.imageurl}
                title= {movie.title}
                synopsis={movie.synopsis}
                released={movie.released}
                imdb= {movie.imdb}
                />
        }
    );

    return (
        <div className="tours">
           {content}
        </div>
    )
}
export default MoviesList;
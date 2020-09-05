import React from "react";
import NominateBtn from "../Buttons/NominateBtn";
import PropTypes from 'prop-types';
import styles from "./MovieResults.module.css";
// import divider from "../../assets/resultsDivider.svg";

const MovieResults = (props) => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <h2 className={styles.divider}>Pick Your 5 Faves!</h2>
        {/* <img src={divider} alt="" className={styles.divider} /> */}
        <ul className={styles.gridContainer}>
          {props.movies.map(({ Title, Year, imdbID, Poster }) => {
            return (
              <li key={imdbID} className={`${styles.movieCard} ${props.nominatedMoviesIds.includes(imdbID) && styles.clickedMovieCard}`}>
                <div className={styles.movieThumbnail}>
                  <img src={props.moviePoster(Poster)} alt="Poster of movie" className="posterSize" />
                </div>
                <div className={styles.movieContent}>
                  <p>Released in {Year}</p>
                  <h3>{Title}</h3>
                </div>
                <div className={styles.btnContainer}>
                  <NominateBtn
                      text="Nominate"
                      nominateMovie={props.nominateMovie}
                      isDisabled={props.nominatedMoviesIds.includes(imdbID)}
                      movieId={imdbID}
                      movieTitle={Title}
                      movieYear={Year}
                    />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    );
}

MovieResults.propTypes = {
  movies: PropTypes.array.isRequired,
  moviePoster: PropTypes.func,
  nominateMovie: PropTypes.func,
  nominatedMoviesIds: PropTypes.array,
}

export default MovieResults;
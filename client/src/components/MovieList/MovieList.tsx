import { FC } from "react";
import { Movie } from "../Model/Model"
import MovieItem from "./MovieItem";

interface Props {
  title: any;
  movies: Movie[];
}

const MovieList:FC<Props> = ({movies, title}) => {


    return (
      <div>
        <h1>{title}</h1>
        {movies.map((movie: any) => (
          <div key={movie._id}>
         <MovieItem movie={movie} />
          </div>
        ))}
      </div>
    );
}

export default MovieList
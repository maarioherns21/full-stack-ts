import { FC, useEffect, useState } from "react"
import { Movie } from "@/components/Model/Model";
import styles from '@/styles/Home.module.css'
import MovieList from "@/components/MovieList/MovieList";
import useFetch from "@/components/useFetch/useFetch";

interface Promps {
    fetchData: () => void;
    res: Response;
    data: any;
    error: any;
    Movie: Movie;
}

// const API_CALL = "http://localhost:3001/api/movies"

const Movies: FC<Promps> = () => {
const {movies, error, isLoading} =useFetch()



    return (
      <div className={styles.main}>
        <div>{error ? error : null}</div>
        <div>{isLoading ? "loading..." : ""}</div>
        <MovieList movies={movies} title="All Movies" />
      </div>
    );
}

export default Movies
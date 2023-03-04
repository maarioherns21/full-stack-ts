import { Movie } from "@/components/Model/Model";
import MovieList from "@/components/MovieList/MovieList";
import useFetch from "@/components/useFetch/useFetch";
import styles from "@/styles/Home.module.css";
import { FC } from "react";

interface Promps {
  movie: Movie[];
}



const ProfilePage: FC<Promps> = () => {
  const { movies, error, isLoading } = useFetch();
  const movie = movies.filter((movie) => movie.creator === "mario");

  return (
    <div className={styles.main}>
      <div>{error ? error : null}</div>
      <div>{isLoading ? "loading..." : ""}</div>
      <MovieList movies={movie} title="All Movies" />
    </div>
  );
};

export default ProfilePage;

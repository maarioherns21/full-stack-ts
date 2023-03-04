import EditForm from "@/components/EditForm/EditForm";
import { Movie } from "@/components/Model/Model";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import useFetch from "@/components/useFetch/useFetch";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import Popup from "reactjs-popup";
import styles from '@/styles/Home.module.css'

type Function = () => void;

const DetailPage: Function = () => {
  const router: NextRouter = useRouter();
  const movieId: string | string[] | undefined = router.query.movieid;
  const { movies, error, isLoading } = useFetch();
  const movie: Movie | undefined = movies.find( (movie) => movie._id === movieId );
  const load: string = "Loading..";

  return (
    <div>
      <div>{error ? error : null}</div>
      <div>{isLoading ? load : ""}</div>
      {movie && <MovieDetails movie={movie} />}
      <div className={styles.main}>
        <Popup trigger={<button>update</button>}>
          <EditForm movie={movie} />
        </Popup>
      </div>
    </div>
  );
};

export default DetailPage;

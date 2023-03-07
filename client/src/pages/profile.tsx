import { Movie } from "@/components/Model/Model";
import MovieList from "@/components/MovieList/MovieList";
import useFetch from "@/components/useFetch/useFetch";
import styles from "@/styles/Home.module.css";
import { useSession } from "next-auth/react";
import { FC } from "react";

interface Promps {
  movie: Movie[];
}


{/* <div>{error ? error : null}</div>
<div>{isLoading ? "loading..." : ""}</div>
<MovieList movies={movie} title="All Movies" /> */}

const ProfilePage: FC<Promps> = () => {
  const {data: session} =useSession()
  const { movies, error, isLoading } = useFetch();
  const movie = movies.filter((movie) => movie.creator ===  session?.user );

  return (
    <div >
      <div>{error ? error : null}</div>
      <div>{isLoading ? "loading..." : ""}</div>
      <img src={session?.user?.image!} alt={session?.user?.name!} />
       <h2>{session?.user?.name}</h2>
       <h3>{session?.user?.email}</h3>
       <MovieList movies={movie} title="All Movies" />
    </div>
  );
};

export default ProfilePage;

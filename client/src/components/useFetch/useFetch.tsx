import { useEffect, useState } from "react";
import { Movie } from "../Model/Model";

interface Promps {
  fetchData: () => void;
  res: Response;
  data: any;
  error: any;
  Movie: Movie;
}

const API_CALL = "http://localhost:3001/api/movies";

const useFetch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<any>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  const fetchData: () => Promise<void> = async () => {
    try {
      const res = await fetch(API_CALL);
      const data = await res.json();
      console.log(data);
      setError(null);
      setIsloading(false);
      setMovies(data);
    } catch (error) {
      setError(error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    movies,
    error,
    isLoading,
  } as const;
};

export default useFetch;

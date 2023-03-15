import EditForm from "@/components/EditForm/EditForm";
import { Movie } from "@/components/Model/Model";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import useFetch from "@/components/useFetch/useFetch";
import { NextRouter, useRouter } from "next/router";
import { FC, useState } from "react";
import Popup from "reactjs-popup";
import styles from '@/styles/Home.module.css'
import { useSession } from "next-auth/react";

interface Promp {
  like: string;
  comment: string;
}

type Function = () => void;

const DetailPage: Function = () => {
  const {data: session} =useSession()
  const router: NextRouter = useRouter();
  const movieId: string | string[] | undefined = router.query.movieid;
  const { movies, error, isLoading } = useFetch();
  const movie: Movie | undefined = movies.find( (movie) => movie._id === movieId );
  const load: string = "Loading..";
 const [formData, setFormData]=useState<Promp>({ like:"", comment: ""})
 const id =  router
console.log(id, movieId)
  const handleDelete: () => Promise<void> = async () => {
    try {
      const res: Response = await fetch( `http://localhost:3001/api/movies/${movieId}`, { method: "DELETE" });
      const data: any = await res.json();
      console.log(data);
      router.push("/movies");
    } catch (error: any) {
      console.log(error);
    }
  };

  

 const handleLike : () => Promise<void> =  async () => {
    try {
    const like = { like: formData.like }
    const token: any  = localStorage.getItem("token")
    const user: any = JSON.parse(token)
    const  res: Response = await fetch(
      `http://localhost:3001/api/movies/${movieId}/likes`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(like),
      }
    );
    const data: any = await res.json();
    console.log(data)
        
    } catch (error: any) {
        console.log(error);
    }
  }

  const handleComment: () => Promise<void> = async () => {
    try {
      const comment = { comment: formData.comment };
      const res: Response = await fetch(
        `http://localhost:3001/api/movies/${movieId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comment),
        }
      );
      const data: any = await res.json();
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };



  return (
    <div>
      <div>{error ? error : null}</div>
      <div>{isLoading ? load : ""}</div>
      {movie && <MovieDetails movie={movie}  handleLike={handleLike} />}
      <div className={styles.main}>
        <Popup trigger={<button>update</button>}>
          <EditForm movie={movie} />
        </Popup>
        <button onClick={handleDelete}>Delete</button>
        <textarea value={formData.comment} onChange={(e => setFormData({...formData , comment: e.target.value }))} />
        <button onClick={handleComment}>Comment</button>
      </div>
    </div>
  );
};

export default DetailPage;

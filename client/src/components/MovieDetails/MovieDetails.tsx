import { FC } from "react"
import styles from '@/styles/Home.module.css'

interface Promps {
  movie: any;
  handleLike: () => void;
}



const MovieDetails: FC<Promps> = ({movie, handleLike}) =>{

    
    return (
      <div className={styles.main}>
        <h1>{movie.name}</h1>
        <img src={movie.image} style={{ height: "420px" }} />
        <h2>{movie.body}</h2>
        <h3>{movie.creator}</h3>
        <div>
          {movie.comments.map((movie: any, index: number) => (
            <ul key={index}>
              <li>
                <h2>{movie}</h2>
              </li>
            </ul>
          ))}
        </div>
            <button onClick={handleLike}>likes{movie.likes.length}</button>
      </div>
    );
}


export default MovieDetails
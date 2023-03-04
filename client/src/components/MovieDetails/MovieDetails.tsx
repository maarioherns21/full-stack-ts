import { FC } from "react"
import styles from '@/styles/Home.module.css'

interface Promps {
  movie: any;
}



const MovieDetails: FC<Promps> = ({movie}) =>{

    
    return (
        <div className={styles.main}>
        <h1>{movie.name}</h1>
        <img src={movie.image} style={{ height:"420px"}} />
        <h2>{movie.body}</h2>
        <h3>{movie.creator}</h3>
      </div>
    )
}


export default MovieDetails
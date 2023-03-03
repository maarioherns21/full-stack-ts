import Link from "next/link"
import { FC } from "react"

interface Props {
    movie: any
}

const MovieItem:FC<Props> = ({movie}) => {

    return (
        <div>
            <Link href={`/movies/${movie._id}`}>
         <img src={movie.image}  alt={movie.name}  style={{ maxHeight: "420px" }} />
          <h2>{movie.name}</h2>
            </Link>
   
        </div>
    )
}

export default MovieItem
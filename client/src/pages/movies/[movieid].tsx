import { useRouter } from "next/router"



const DetailPage = () => {
const router = useRouter();
const movieId = router.query.movieid

    return (
        <div>
         {movieId}
        </div>
    )
}

export default DetailPage
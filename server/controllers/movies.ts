import Tapes from "../model/movie.js"


type Params = (req: any, res: any) => void ;


export const index: Params = async (req , res) => {
    try {
        const movies = await Tapes.find()

        res.status(200).json(movies)
    } catch (error: any) {
        console.log(error.message)

        res.status(401).json({ message: error.message })
    }

}

export const createMovie: Params = async (req , res) => {
    try {
        const movie = req.body

        const data = new Tapes({ ...movie })
          console.log(movie)
        const saveMovie = await data.save()
         
        res.status(200).json(saveMovie)
    } catch (error: any) {
        console.log(error.message)

        res.status(401).json({ message: error.message })
    }
}


export const deleteMovie: Params = async (req, res) => {
    try {
    const {id} = req.params

    const data = await Tapes.findByIdAndDelete(id)

    res.status(200).json(data)

    } catch (error: any) {
        console.log(error.message)

        res.status(401).json({ message: error.message })
    }
}

export const updateMovie: Params = async (req, res) => {
    try {
        const movie = req.body
        const { id } = req.params
        const newData: any = { ...movie, _id: id }

        const data = await Tapes.findByIdAndUpdate(id, newData, { new: true })

        res.status(200).json(data)

    } catch (error: any) {
        console.log(error.message)

        res.status(401).json({ message: error.message })
    }
}

export const likeMovie: Params = async (req, res) => {
    try {
        const { like } = req.body
        const { id } = req.params

        const movie: any = await Tapes.findById(id)

        movie.likes.push(like)

        const data = await Tapes.findByIdAndUpdate(id, movie, { new: true })


        res.status(200).json(data)
    } catch (error: any) {
        console.log(error.message)

        res.status(401).json({ message: error.message })
    }
}

export const commentMovie: Params = async (req, res) => {
    try {
        const { comment } = req.body
        const { id } = req.params
        const movie: any = await Tapes.findById(id)

        movie.comments.push(comment)

        const data = await Tapes.findOneAndUpdate(id, movie, { new: true })

        res.status(200).json(data)
    } catch (error: any) {
        console.log(error.message)

        res.status(401).json({ message: error.message })
    }
}



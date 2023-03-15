import Tape from "../../../../model/movies";


const handler:(req: any, res: any) => Promise<void>  = async (req , res) => {
    
    try {

        if(req.method === "POST") {
          
        const movie = req.body

        const newMovie = await new Tape({ ...movie})
          
        console.log(newMovie)
        const data  = await newMovie.save()

        res.status(200).json(data)

        } else  {
            res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
        }
   
    } catch (error: any) {
      console.log(error.message);
  
      res.status(200).json({ message: error.message });
    }
  };
  
  export default handler

 
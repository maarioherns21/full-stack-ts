import Tape from "../../../../model/movies";




const handler = async (req: any, res: any) => {
  try {
    if (req.method === "POST") {
     
      const user = req.user;
      
      console.log(user)

      const { id } = req.params;
      console.log(id)
      const tape = await Tape.findById(id);
      console.log(tape)
      tape.likes.push({...user});

      const data = await Tape.findByIdAndUpdate(id, tape, {new: true})

      res.status(201).json(data);
    } else {
        res.status(500).json({ message: "HTTP method not valid only POST Accepted Likes"})
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export default handler
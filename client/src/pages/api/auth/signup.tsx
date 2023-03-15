import connectMongo from '../../../../database/conn';
import Users from '../../../../model/user';
import { hash } from 'bcryptjs';

interface Promps {
    username: string;
    email: string;
    password: string;
}

type funtion  = (req: any, res: any ) => void 

const handler: funtion = async (req, res) => {
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        // if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        
        const { username, email, password } : Promps = req.body;

        // check duplicate users
        const checkexisting = await Users.findOne({ email });
        
        if(checkexisting) return  res.status(422).json({ message: "User Already Exists...!"});

        // hash password
       const data = await new Users({ username, email, password: await hash(password, 12) })
        
       const newData = await data.save();

       res.status(200).json(newData)
    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}


export default handler

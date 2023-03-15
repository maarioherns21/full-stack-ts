import Users from "../../../../model/user"



type Function = (req: any, res: any) => Promise<void>;

const handler: Function = async (req, res) => {
  try {
    if (req.method === "GET") {
      const users = await Users.find();

      res.status(200).json(users);
    } else {
      res.status(401).json({ message: "no data" });
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export default handler; 
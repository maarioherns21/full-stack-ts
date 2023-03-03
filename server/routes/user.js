import express from "express"
const routerUser = express.Router()


routerUser.get("/")

routerUser.post("/login")

routerUser.post("/register")


export default routerUser
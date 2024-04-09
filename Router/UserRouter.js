import express from "express";
import { todosRouter } from '../Router/todosRouter.js';

import { UserController } from '../Controllers/UserController.js'

const userRouter = express.Router();

const userController = new UserController()
userRouter.get("/", userController.getUserByName)
userRouter.post("/", userController.addUser)


export {

    userRouter

}
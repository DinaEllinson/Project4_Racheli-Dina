import express from "express";
import { todosRouter } from '../Router/todosRouter.js';

import { UserController } from '../Controllers/UserController.js'

const userRouter = express.Router();

const userController = new UserController()
/*const app=express();
app.use(':id/todos',todosRouter)*/

userRouter.get("/:id", userController.getUserById)
userRouter.get("/:id", userController.getUserById)
userRouter.post("/", userController.addUser)

//testRouter.delete("/:id", UserController.deleteUser)

//testRouter.put("/:id", UserController.updateUser)

export {

    userRouter

}
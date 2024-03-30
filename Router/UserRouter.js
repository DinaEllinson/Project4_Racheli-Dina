import express from "express";

import { UserController } from '../Controllers/UserController.js'

const testRouter = express.Router();

const UserController = new UserController()

testRouter.get("/users/:id", UserController.getUserById)

testRouter.post("/users", UserController.addUser)

//testRouter.delete("/:id", UserController.deleteUser)

//testRouter.put("/:id", UserController.updateUser)

export {

    UserRouter

}
import express from "express";

import { TodosController } from '../Controllers/todosController.js'

const todosRouter = express.Router();

const todosController = new TodosController()

todosRouter.get("/", todosController.getTodos)

todosRouter.post("/:userId", todosController.addTodo)

todosRouter.delete("/:todoId", todosController.deleteTodo)

todosRouter.put("/", todosController.updateTodo)

export {

    todosRouter

}
import express from "express";

import { TodosController } from '../Controllers/todosController.js'

const todosRouter = express.Router();

const todosController = new TodosController()

todosRouter.get("/:id/todos", todosController.getTodos)

todosRouter.post("/:id/todos", todosController.addTodo)

todosRouter.delete("/:todoId", todosController.deleteTodo)

todosRouter.put("/:id/todos", todosController.updateTodo)

export {

    todosRouter

}
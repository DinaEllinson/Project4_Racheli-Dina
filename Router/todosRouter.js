import express from "express";

import { TodosController } from '../Controllers/todosController.js'

const todosRouter = express.Router();

const todosController = new TodosController()

todosRouter.get("/", todosController.getTodos)

todosRouter.post("/", todosController.addTodo)

todosRouter.delete("/:id/todos/:todoId", todosController.deleteTodo)

todosRouter.put("/:id/todos", todosController.updateTodo)

export {

    todosRouter

}
import { TodosService } from '../Service/todosService.js'

export class TodosController {

    async getTodos(req, res) {

        try {

            const todosService = new TodosService();

            const resultItem = await todosService.getTodoById(req.params.id);

            res.status(200).json({ status: 200, data: resultItem });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async addTodo(req, res) {

        try {

            const todosService = new TodosService();

             await todosService.addUser(req.body);

            res.status(200).json({ status: 200 });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

    async deleteTodo(req, res) {

        try {

            const todosService = new TodosService();

            await todosService.deleteTodo(req.params.todoId);

            res.status(200).json({ status: 200, data: req.params.id });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }
    async updateTodo(req, res) {

        try {

            const todosService = new TodosService();

            await todosService.updateTodo(req.body);

            res.status(200).json({ status: 200, data: req.params.id });

        }

        catch (ex) {

            const err = {}

            err.statusCode = 500;

            err.message = ex;

            next(err)

        }

    }

}
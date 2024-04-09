import { TodosService } from '../Service/todosService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class TodosController {

    async getTodos(req, res,next) {

        try {

            const todosService = new TodosService();

            const resultItem = await todosService.getTodoById(req.query.userId,req.query);

            res.status(200).json({ resultItem });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async addTodo(req, res) {

        try {

            const todosService = new TodosService();
            const result=await todosService.addTodo(req.body);
            console.log(result)
            res.status(200).json( result );

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async deleteTodo(req, res) {

        try {

            const todosService = new TodosService();

            await todosService.deleteTodo(req.params.todoId);

            res.status(200).json({ status: 200, data: req.params.id });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }
    async updateTodo(req, res) {

        try {

            const todosService = new TodosService();

            await todosService.updateTodo(req.body);
            res.status(200).json({ status: 200});

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

}
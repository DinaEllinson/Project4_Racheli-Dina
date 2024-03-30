import { executeQuery } from './db.js';

import { addTodoQuery,getTodoByIdQuery,deleteTodoQuery,updateTodoQuery} from './todosQuery.js'

export class TodosService {

    async getTodoById(id) {

        const queryTodo = getTodoByIdQuery();

        const result =  await executeQuery(queryTodo, [id]);

        return result;

    }

    async addTodo(TodoItem) {

         const queryTodo=addTodoQuery();
         const result= await executeQuery(queryTodo,[TodoItem.id,TodoItem.userId,TodoItem.title,TodoItem.completed])
         return result;
    }
    async deleteTodo(id) {

        const queryTodo=deleteTodoQuery();
        const result= await executeQuery(queryTodo,[id])
        return result;
   }
   async updateTodo(todoItem) {

    const queryTodo=updateTodoQuery();
    const result= await executeQuery(queryTodo,[todoItem.title,todoItem.completed,todoItem.id])
    return result;
}

}
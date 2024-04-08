import { executeQuery } from './db.js';

import { getByValueQuery,deleteQuery,addQuery,updateQuery,getSpecialParamsQuery} from './queries.js'

export class TodosService {

    async getTodoById(id,sort) {
        const queryTodo = getByValueQuery("todos","userId")
        //queryTodo+= getSpecialParamsQuery(["id","userId","title","completed"],sort);
        const result =  await executeQuery(queryTodo, [id]);
        return result;

    }

    async addTodo(TodoItem) {
         const queryTodo=addQuery("todos",["userId","title","completed"]);
         const result= await executeQuery(queryTodo,[TodoItem.userId,TodoItem.title,TodoItem.completed])
         return result;
    }
    async deleteTodo(id) {

        const queryTodo=deleteQuery("todos","id");
        const result= await executeQuery(queryTodo,[id])
        return result;
   }
   async updateTodo(todoItem) {

    const queryTodo=updateQuery("todos",["title","completed"]);
    const result= await executeQuery(queryTodo,[todoItem.title,todoItem.completed,todoItem.id])
    return result;
}

}
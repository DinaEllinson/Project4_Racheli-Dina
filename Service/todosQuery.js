

function getTodoByIdQuery() {

    const query = `SELECT * FROM project_db.todos  where userId = ?;`;
    return query

}
function deleteTodoQuery() {

    const query = `DELETE FROM project_db.todos  where id = ?;`;
    return query

}
function updateTodoQuery() {

    const query = `UPDATE
    project_db.todos
SET
    title = ?,
    completed = ?
WHERE
    id = ?`;
    return query;

}
function addTodoQuery(){
    const query = `INSERT INTO project_db.todos(id,userId,title,completed) 
    VALUES (?,?,?,?);`;
    return query;
}
export {

    addTodoQuery,getTodoByIdQuery,updateTodoQuery,deleteTodoQuery

}
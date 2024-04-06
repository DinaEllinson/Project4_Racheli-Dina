import React from "react";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo"

function DisplayTodo(props) {
    const { todo, todos, setTodos } = props;

    return (<>
        <strong>TodoID:</strong>{todo} <br />
        <strong>Title: </strong>{todo} <br />
        <UpdateTodo todo={todo} setTodos={setTodos} todos={todos} />
        <DeleteTodo todo={todo} setTodos={setTodos} todos={todos} />
    </>)
}
export default DisplayTodo
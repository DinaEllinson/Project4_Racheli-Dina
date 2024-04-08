import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function UpdateTodo(props) {
    const { todo, todos, setTodos } = props;
    const [inUpdate, setInUpdate] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(todo.title)

    useEffect(() => { setUpdatedTitle(updatedTitle) }, [inUpdate]);
    const updateTodo = (event) => {
        event.preventDefault()
        setInUpdate(false);
        if (todo.title === updatedTitle)
            return
        updateTodoRequest("title", updatedTitle)
    }

    const updateTodoRequest = (key, newValue) => {
    try{
        const updatedTodo = { ...todo, [key]: newValue };
        fetch(`http://localhost:8080/todos`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(updatedTodo),
        })
            .then(response => {
                if (!response.ok) {
                    return
                }
                setTodos(todos.map((todo1) => todo1.id === todo.id ? updatedTodo : todo1));
                console.log("todo updated")
            })
        } catch (error) {
            console.error("Error Updating todo:", error.message);
        }
    }

    return (todo&&<><strong>completed:</strong>
        <input type='checkbox' checked={todo.completed} onChange={() => updateTodoRequest("completed", !todo.completed)} /><br />
        <button onClick={() => { setInUpdate((prev) => !prev) }}>🖋</button>
        {inUpdate && <form onSubmit={updateTodo}>
            <label  >Title</label>
            <input type='text' id='title' value={updatedTitle} onChange={(event) => { setUpdatedTitle(event.target.value) }} required />
            <button type="submit">✔</button>
        </form>}</>)
} export default UpdateTodo
import React, { useState } from "react";
import { useParams } from "react-router-dom";


function AddTodo(props) {
    const { userId } = useParams();
    const { todos, setTodos } = props;
    const [isAdding, setIsAdding] = useState(false);

    async function addTodo(event) {
        event.preventDefault();

        try {
             

             const newTodo = {
                "userId": userId,
                "title": event.target[0].value,
                "completed": false
            };

             const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTodo)
            };

            const insertedId = await fetch(`http://localhost:8080/todos`, requestOptions);
            const id=await insertedId.json();             
            console.log(id)
            newTodo.id=id;
            console.log(newTodo)
            setTodos([...todos,newTodo]);
            setIsAdding(false);
            console.log("todo added")
        } catch (error) {
            console.error("Error adding todo:", error.message);
        }
    }

    return (
        <>
            <button onClick={() => setIsAdding(true)}>Add ToDo</button>
            {isAdding && (
                <form onSubmit={addTodo}>
                    <h3>Add Title</h3>
                    <input type="text"></input>
                    <button type="submit">✔</button>
                </form>
            )}
        </>
    );
}

export default AddTodo;
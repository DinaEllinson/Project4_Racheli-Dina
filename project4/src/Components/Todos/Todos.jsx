import React, { useEffect, useState ,useContext } from "react";
import TodosDisplay from "./TodosDisplay";
import AddTodo from "./AddTodo";
import { UserContext } from '../../App' ;
function Todos(){
    const { currentUser} = useContext(UserContext)
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/todos/?userId=${currentUser.id}/?_limit=10`)
            .then(response => response.json())
            .then(res => {
                console.log(res.resultItem);
                setTodos(res.resultItem);
                setLoading(false);
                console.log(todos)
            })
            .catch(err => {
                console.error(err);
                setError("Error fetching todos. Please try again.");
                setLoading(false);
            });
    }, []);

   /* function fetchArr(){
        fetch(`http://localhost:8080/todos/?userId=1`)
          .then(response => response.json())
          .then(data=>{setTodos(data);setLoading(false);})
        }
        
        useEffect(()=>{fetchArr()},[]);*/
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h1>ToDos</h1>
                    <AddTodo todos={todos} setTodos={setTodos} />
                    <TodosDisplay setTodos={setTodos} todos={todos} />
                </>
            ))}
        </>
    );
} export default Todos
/*
import React, { useEffect, useState, useContext } from "react";
import TodosDisplay from "./DisplayTodo";
import AddTodo from "./AddTodo";
import { UserContext } from "../../App";

function Todos() {
  const { currentUser } = useContext(UserContext);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`http://localhost:8080/todos/?userId=${currentUser.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch todos"); // Handle non-200 status codes
        }
        const data = await response.json();
        setTodos(data.resultItem); // Update state with fetched data
      } catch (err) {
        console.error(err);
        setError("Error fetching todos. Please try again.");
      } finally {
        setLoading(false); // Always set loading to false after fetching
      }
    };

    fetchTodos(); // Call the function to fetch data on component mount
  }, [currentUser.id]); // Re-fetch todos if currentUser.id changes

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>Todos</h1>
          <AddTodo todos={todos} setTodos={setTodos} />
          <TodosDisplay setTodos={setTodos} todos={todos} />
        </>
      )}
    </>
  );
}

export default Todos;*/

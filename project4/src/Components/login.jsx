import React from 'react'
import { useState, useEffect, useContext } from 'react'
import {
  useNavigate, Link
} from "react-router-dom";
import "../style.css";

 function Login() {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [userId, setUserId] = useState(null);
    const navigate=useNavigate()

    useEffect(() => {
      if (userId) {
        navigate(`/user/${userId}/home`);
      }
    }, [userId, navigate]);

    function isValidUser(){
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              password,
            }),
          })
            .then((response) => {
              if (response.status === 200) {
                navigate('/')
              } else if (response.status === 401) {
                alert("user not found, please register")
              } else {
                alert("error")
              }
            });
       
      }

  return (
    <>
      <input type='text' placeholder=' User Name' onChange={(e) => setName(e.target.value)}/>
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={isValidUser}>Login</button>
      <Link to="/register">New User?</Link>
    </>
  )
}

export default Login
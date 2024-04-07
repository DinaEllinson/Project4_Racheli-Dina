import React from 'react'
import { useState, useEffect, useContext } from 'react'
import {
  useNavigate, Link
} from "react-router-dom";
//import "../style.css";

 function Login() {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    //const [userId, setUserId] = useState(null);
    const navigate=useNavigate()

   /* useEffect(() => {
      if (userId) {
        navigate(`/user/${userId}/home`);
      }
    }, [ navigate]);*/
    function getUser(){
      fetch(`http://localhost:8080/users/?userName=${name}`)
          .then(response => response.json())
          .then(data=>{localStorage.setItem("currentUser",data)})
          .then(data=>navigate(`/users/${data.id}/home`))
    }
    function isValidUser(){
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "userName":name,
              "password":password
            }),
          })
            .then((response) => {
              //console.log(response)
              if (response.status === 200) {
                getUser()
              } else if (response.status === 200) {
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
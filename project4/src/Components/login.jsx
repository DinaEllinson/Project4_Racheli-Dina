/*import React from 'react'
import { useState, useEffect, useContext } from 'react'
import {
  useNavigate, Link
} from "react-router-dom";
//import "../style.css";

 function Login() {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [userId, setUserId] = useState(null);
    const navigate=useNavigate()

   /*useEffect(() => {
      if (userId) {
        navigate(`/user/${userId}/home`);
      }
    }, [ navigate]);
    function getUser(){
      fetch(`http://localhost:8080/users/?userName=${name}`)
          .then(response => response.json())
          .then(res=>{console.log(...res);
            localStorage.setItem("currentUser",JSON.stringify(...res));
            navigate(`/users/${[...res][0].id}/home`)
          })
          console.log("user's login was successful")
    }
    function isValidUser(){
        fetch(`http://localhost:8080/login/${name}/${password}`)
            .then((response) => response.json())
              .then(response=>{
                if (response.length>0) {
                getUser()
              } else if (response.length ==0) {
                alert("user not found, please register");
                console.log("access denied")
              } else {
                alert("error")
              }})
            };
       
      

  return (
    <>
      <input type='text' placeholder=' User Name' onChange={(e) => setName(e.target.value)}/>
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={isValidUser}>Login</button>
      <Link to="/register">New User?</Link>
    </>
  )
}

export default Login*/
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
function Login() {

    const navigate = useNavigate();
    const { setCurrentUser } = useContext(UserContext);
    function loginFunc(event) {
        event.preventDefault();
        let name = event.target[0].value;
        let password = event.target[1].value;
        fetch(`http://localhost:8080/login/${name}/${password}`)
            .then(response => response.json())
            .then(response => response.length === 0 ? alert("No such user. Please register") : successLogin(response,name))
            .catch(error => console.error("Error during login:", error));
    }
    
    function successLogin(user,name) {
      
        fetch(`http://localhost:8080/users/?userName=${name}`)
            .then(response => response.json())
            .then(res=>{console.log(...res);
              console.log("user's login was successful")
              localStorage.setItem("currentUser",JSON.stringify(...res));
              setCurrentUser(user)
              navigate(`/users/${[...res][0].id}/home`)

            })
    }

    return (<>
        <form onSubmit={loginFunc}>
            <p>UserName</p>
            <input placeholder="Enter UserName..." required></input><br />
            <p >Password</p>
            <input type="password" placeholder="Enter Pasword..." required></input><br /><div />
            <button type="submit">Login</button>
        </form>
        <h3>To register click </h3>
        <Link to={"/register"}> Here</Link>
    </>)
} export default Login
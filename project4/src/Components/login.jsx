import React from 'react'
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
    }, [ navigate]);*/
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

export default Login
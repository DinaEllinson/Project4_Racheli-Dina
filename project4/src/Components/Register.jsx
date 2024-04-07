import React from 'react'
import { useState } from 'react'
import {
  useNavigate
} from "react-router-dom";

function Register() {
    const [userName, setUserName]=useState("")
    const [email, setEmail]=useState("")
    const [name, setName]=useState("")
    const [phone, setPhone]=useState(null)
    const [city, setCity]=useState("")
    const [pwd, setPwd]=useState("")
    const navigate=useNavigate()

    function postNewUser(){
        const user = {
            "userName": userName,
            "name": name,
            "email": email,
            "phone":phone,
            "city":city
        };
        const pwdUser={
            "userName": userName,
            "password": pwd
        }
      fetch("https://localhost:8080/users", {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(response => response.json())
    .then(localStorage.setItem("currentUser",user))
   fetch("https://localhost:8080/login", 
   {method: 'POST',
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify(pwdUser)}).then(navigate("/home"))
    }

  return (
    <>
    <form>
        <input type='text' placeholder='user name' onChange={(e) => setUserName(e.target.value)}/>
        <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type='text' placeholder='name'onChange={(e) => setName(e.target.value)}/>
        <input type='number' placeholder='phone' onChange={(e) => setPhone(e.target.value)}/>
        <input type='text' placeholder='city' onChange={(e) => setCity(e.target.value)}/>
        <input type='password' placeholder='password' onChange={(e) => setPwd(e.target.value)}/>
        <button onClick={postNewUser}>Submit</button>
    </form>
    </>
  )
}

export default Register
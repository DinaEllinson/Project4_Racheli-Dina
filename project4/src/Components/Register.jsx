/*import React from 'react'
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
            "phone":phone,
            "email": email,
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
   body: JSON.stringifunction postNewUser(){
        const user = {
            "userName": userName,
            "name": name,
            "phone":phone,
            "email": email,
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
   body: JSON.stringify(pwdUser)})
   .then(navigate(`users/2/home`))
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
*/
import { useState } from "react";
import React from "react";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

function Register() {
    const [continueReg, setContinueReg] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function registerFunc(event) {
        event.preventDefault();
        let _userName = event.target[0].value;
        let _password = event.target[1].value;
        let verifyPassword = event.target[2].value;

        if (_password !== verifyPassword) {
            setError("The verified password does not match the password");
            return;
        }

        fetch(`http://localhost:8080/users/?userName=${_userName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(response => {
                if (response.length !== 0) {
                    setError("Username already exists.");
                } else {
                    setUserName(_userName);
                    setPassword(_password);
                    setContinueReg(true);
                }
            })
            .catch(error => {
                console.error("Error during registration:", error.message);
                setError("An error occurred during registration. Please try again later.");
            });
    }

    return (
        <>
            {!continueReg && (
                <>
                    <form onSubmit={registerFunc}>
                        <p>UserName</p>
                        <input placeholder="Enter UserName" required></input><br />
                        <p>Password</p>
                        <input type="password" placeholder="Enter Password" required></input><br />
                        <p>Verify password</p>
                        <input type="password" placeholder="Verify Password" required></input><br />
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <button type="submit">Register</button>
                    </form>
                    <h3>To Login click </h3>
                    <Link to={"/Login"}>Here</Link>
                </>
            )}
            {continueReg && <RegisterForm userName={userName} password={password} />}
        </>
    );
}

export default Register;
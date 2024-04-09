/*import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'; 

import Login from './Components/login.jsx'
import Register from './Components/Register.jsx'
import Home from './Components/home.jsx'
import Todos from './Components/Todos/Todos.jsx'
import Posts from './Components/Posts/Posts.jsx'
import Info from './Components/Info.jsx'
import FailToLoadPage from './Components/FailToLoadPage.jsx'
export const UserContext = createContext();

function App() {
 
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")))
  console.log(currentUser);
  const currentPage = currentUser ? `/users/${currentUser.id}/home` : "/login";
  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={currentPage} />} />
            {<Route path="login" element={<Login />} />}
            {<Route path="register" element={<Register />} />}
            <Route path="users/:userId/home" element={<Home />}>
              <Route path='todos' element={<Todos />} />
              <Route path='posts' element={<Posts />} />
             {<Route path='info' element={<Info />} />}
            </Route>
            <Route path="*" element={<FailToLoadPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
} export default App*/

import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'; 
import Login from './Components/login.jsx'
import Register from './Components/Register.jsx'
import Home from './Components/home.jsx'
import Todos from './Components/Todos/Todos.jsx'
import Posts from './Components/Posts/Posts.jsx'
import Info from './Components/Info.jsx'
import FailToLoadPage from './Components/FailToLoadPage.jsx'
export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")))
  console.log(currentUser)
  const currentPage = currentUser ? `/users/${currentUser.id}/home` : "/login";
  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={currentPage} />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="users/:userId/home" element={<Home />}>
              <Route path='todos' element={<Todos />} />
              <Route path='posts' element={<Posts />} />
              <Route path='info' element={<Info />} />
            </Route>
            <Route path="*" element={<FailToLoadPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
} export default App
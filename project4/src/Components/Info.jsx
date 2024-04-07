import React, { useContext } from "react";
import { UserContext } from "../App";
function Info() {
  const { currentUser } = useContext(UserContext)
  return (<>
    {currentUser && <div><form>
      <p>ID: {currentUser.id}</p>
      <p>Name: {currentUser.name}</p>
      <p>UserName: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
      <p>City: {currentUser.address.city}</p>
      <p>Phone: {currentUser.phone}</p>
    </form></div>}</>)
} export default Info
import React, { useState } from "react";

function AddComment(props) {
    const { comments, setComments ,postId} = props;
    const [isAddNew, setIsAddNew] = useState(false)
    let user=JSON.parse(localStorage.getItem("currentUser"));
    async function addComment(event) {
        event.preventDefault()
        let newComment = {
            "postId": postId,
            "name":event.target[0].value,
            "email":user.email,
            "body": event.target[1].value
        }
        const newRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        };
        fetch(`http://localhost:8080/comments`, newRequest)
            .then(data => {
                console.log(newComment)
                setComments([...comments, newComment]);
            })
            .catch(error => console.error(error));
        setIsAddNew(false)
        console.log("comment added")

    }

    return (
        <>
            <button onClick={() => setIsAddNew(true)}>add a comment...</button>
            {isAddNew && <div><form onSubmit={addComment}>
                <label>Enter comment's name:</label>
                <input type="text" placeholder="Enter title..."></input><br/>
                <label>Enter comment</label>
                <input type="text" placeholder="Enter body..."></input><br/>
                <button type="submit">✔</button>
            </form></div>}
        </>)
} export default AddComment
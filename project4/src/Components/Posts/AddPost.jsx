import React, { useState } from "react";
import { useParams } from "react-router-dom"

function AddPost(props) {
    const { posts, setPosts } = props;
    const [isAddNew, setIsAddNew] = useState(false)
    const { userId } = useParams();
    async function addPost(event) {
        event.preventDefault()
         
             
        let newPost = {
            "userId": userId,
            "title": event.target[0].value,
            "body": event.target[1].value
        }
        const newRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        };
        fetch(`http://localhost:8080/posts`, newRequest)
            .then(data => {
                setPosts([...posts, newPost]);

            })
            .catch(error => console.error(error));
        setIsAddNew(false)
    }

    return (
        <>
            <button onClick={() => setIsAddNew(true)}>add new post</button>
            {isAddNew && <form onSubmit={addPost}>
                <label>Enter post title</label>
                <input type="text" placeholder="title"></input>
                <label>Enter post body</label>
                <input type="text" placeholder="body"></input>
                <button type="submit">✔</button>
            </form>}
        </>)
} export default AddPost
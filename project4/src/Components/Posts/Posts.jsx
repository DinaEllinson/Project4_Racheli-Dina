import React, { useState, useEffect ,useContext } from "react";
import PostsDisplay from "./PostsDisplay";
import AddPost from "./AddPost";
import { UserContext } from '../../App';
function Posts() {
  const { currentUser} = useContext(UserContext)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/posts/?userId=${currentUser.id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.resultItem)
        setPosts(response.resultItem);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching posts. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>Posts</h1>
          <AddPost posts={posts} setPosts={setPosts} />
          <PostsDisplay setPosts={setPosts} posts={posts} />
        </>
      )}
    </>
  );
}

export default Posts;
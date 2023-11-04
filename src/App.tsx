import "./App.scss";
import { appApi } from "./api/api";
import PostsPage from "./pages/PostsPage/PostsPage";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    appApi.getPosts().then((data) => {
      setPosts(data);
      })

    appApi.getUsers().then((data) =>{
      setUsers(data)
    })  

   }, []);

  useEffect(()=>{
    console.log(posts, users)
  },[posts, users])

  return (
      <PostsPage />
  );
}

export default App;

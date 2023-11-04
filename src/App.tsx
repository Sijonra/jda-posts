import "./App.scss";
import { appApi } from "./api/api";
import PostsPage from "./pages/PostsPage/PostsPage";
import React, { useState, useEffect } from "react";

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


  return (
      <PostsPage />
  );
}

export default App;

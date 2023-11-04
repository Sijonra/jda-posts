import "./App.scss";
import { appApi } from "./api/api";
import PostsPage from "./pages/PostsPage/PostsPage";
import { useState, useEffect, createContext } from "react";

export const PostsDataContext = createContext<PostInterface[]>([]);
export const UsersDataContext = createContext<UserInterface[]>([]);

export interface PostInterface {
  title: string;
  body: string;
  id: number;
  userId: number;
}

interface UserInterface {
  id: number,
  address: string,
  company: {bs: string, catchPhrase: string, name:string},
  email: string,
  name: string,
  phone: string,
  userName: string,
  webSite: string,
}

function App() {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    appApi.getPosts().then((data) => {
      setPosts(data);
    });

    appApi.getUsers().then((data) => {
      setUsers(data);
    });

  }, []);

  useEffect(() => {
    // console.log(users)
  }, [posts, users]);

  return (
    <PostsDataContext.Provider value={posts}>
      <UsersDataContext.Provider value={users}>
        <PostsPage />
      </UsersDataContext.Provider>
    </PostsDataContext.Provider>
  );
}

export default App;
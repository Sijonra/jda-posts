import "./App.scss";
import PostsPage from "./pages/PostsPage/PostsPage";
import { postsApi } from "./api/api";

postsApi.getPosts();

function App() {
  return <PostsPage />;
}

export default App;

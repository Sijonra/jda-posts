import style from "./PostsPage.module.scss";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
// import Checkbox from "../../components/Checkbox/Checkbox";
import Post from "../../components/Post/Post";
import {useContext} from "react";
import {PostsDataContext, UsersDataContext} from "../../App";

const PostsPage = () => {

  const posts = useContext(PostsDataContext);
  const users = useContext(UsersDataContext);
  
  return (
    <section className={style["posts-page"]}>
      <div className={style["post-page__inner"]}>
        <div
          className={
            style["posts-page__search-bar"] + " " + style["search-bar"]
          }
        >
          <Input type="search" />
          <Select
            className={style["search-bar__select"]}
            name="Authors"
            options={
              users.map((user) =>{
                return user.name
              })
            }
          />
          {/* <Checkbox label="пост завершен" isDisabled={false} isChecked={true} /> */}
        </div>
        <div className={style["cards"]}>
        {posts.map((post) => {
            const user = users.find((u) => u.id === post.userId);
            return user ? <Post key={post.id} user={user} post={post} /> : null;
          })}
        </div>
      </div>
    </section>
  );
};

export default PostsPage;

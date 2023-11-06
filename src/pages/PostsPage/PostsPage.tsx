import style from "./PostsPage.module.scss";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
// import Checkbox from "../../components/Checkbox/Checkbox";
import Post from "../../components/Post/Post";
import {useContext, useState} from "react";
import {PostsDataContext, UsersDataContext} from "../../App";

const PostsPage = () => {

  const posts = useContext(PostsDataContext);
  const users = useContext(UsersDataContext);
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [inputValue, setInputValue] = useState("");

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    setSelectedAuthor(event.target.value);
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValue(event.target.value);
  }
  
  const filteredPosts = selectedAuthor === "All" ? posts : posts.filter((post)=>{
    const user = users.find((u) => u.id === post.userId);
    return user && user.name === selectedAuthor;
  })

  const finallySortedPosts = filteredPosts.filter((post) => {
    const searchString = inputValue.toLowerCase();
    if (searchString === "") {
      return true;
    }
    const tmp = searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // экранирование
    const stringWithSpace = tmp.replace(/,/g, ' ');
    const tmpArray = stringWithSpace.split(/\s+/).filter(word => word.trim() !== "");
    const res = tmpArray.join('|');
    const regPattern = new RegExp(res);
    return regPattern.test(post.title) || regPattern.test(post.body);
  });
  
  return (
    <section className={style["posts-page"]}>
      {
        finallySortedPosts.length
      }
      <div className={style["post-page__inner"]}>
        <div
          className={
            style["posts-page__search-bar"] + " " + style["search-bar"]
          }
        >
          <Input type="search" value={inputValue} onChange={onInputChange} />
          <Select
            className={style["search-bar__select"]}
            name="Authors"
            options={
              users.map((user) =>{
                return user.name
              })
            }
            selectedAuthor={selectedAuthor}
            onChange={onSelectChange}
          />
          {/* <Checkbox label="пост завершен" isDisabled={false} isChecked={true} /> */}
        </div>
        <div className={style["cards"]}>

        {
          finallySortedPosts.length !== 0 ? finallySortedPosts.map((post) => {
            const user = users.find((u) => u.id === post.userId);
            return user ? <Post key={post.id} user={user} post={post} /> : null;
          })
          :
          "Нет постов"
        }
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
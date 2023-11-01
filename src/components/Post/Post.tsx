import style from "./Post.module.scss";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import { FC } from "react";

interface PostProps {
  post: any;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <>
      <div className={style["post"]}>
        <Card
          className={style["post__card"] + " " + style["card"]}
          elevation={1}
        >
          <Heading className={style["card__title"]} type="introduction">
            {post.title}
          </Heading>
          <Paragraph className={style["card__text"]} type="medium">
            {post.body}
          </Paragraph>
        </Card>
      </div>
    </>
  );
};

export default Post;

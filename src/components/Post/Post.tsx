import style from "./Post.module.scss";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import Badge from "../Badge/Badge";
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
          <Badge
            type="badge"
            theme="solid"
            color="yellow"
            text={"author " + post.id}
            className={style["card__badge"]}
          />
        </Card>
      </div>
    </>
  );
};

export default Post;

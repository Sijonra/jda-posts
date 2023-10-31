import { useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

interface MenuProps {
  page?: string;
}

const Menu: FC<MenuProps> = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={
        isOpen ? style.menu : style["menu"] + " " + style["menu__close"]
      }
    >
      <div
        className={
          isOpen
            ? style["menu__button"] + " " + style["menu__button_open"]
            : style["menu__button"] + " " + style["menu__button_close"]
        }
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.115 12L19.05 7.065C19.335 6.795 19.5 6.42 19.5 6C19.5 5.175 18.825 4.5 18 4.5C17.58 4.5 17.205 4.665 16.935 4.935L12 9.885L7.065 4.935C6.795 4.665 6.42 4.5 6 4.5C5.175 4.5 4.5 5.175 4.5 6C4.5 6.42 4.665 6.795 4.935 7.065L9.885 12L4.95 16.935C4.665 17.205 4.5 17.58 4.5 18C4.5 18.825 5.175 19.5 6 19.5C6.42 19.5 6.795 19.335 7.065 19.065L12 14.115L16.935 19.05C17.205 19.335 17.58 19.5 18 19.5C18.825 19.5 19.5 18.825 19.5 18C19.5 17.58 19.335 17.205 19.065 16.935L14.115 12Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3ZM13 13H1C0.45 13 0 13.45 0 14C0 14.55 0.45 15 1 15H13C13.55 15 14 14.55 14 14C14 13.45 13.55 13 13 13ZM9 6H1C0.45 6 0 5.55 0 5C0 4.45 0.45 4 1 4H9C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6ZM15 7H1C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7ZM5 12H1C0.45 12 0 11.55 0 11C0 10.45 0.45 10 1 10H5C5.55 10 6 10.45 6 11C6 11.55 5.55 12 5 12Z"
              fill="#fff"
            />
          </svg>
        )}
      </div>
      <div>
        {" "}
        <h2 className={style["menu__title"]}>DOCS MENU</h2>
        <nav className={style["nav"] + " " + style["menu__nav"]}>
          <ul className={style["nav__list"]}>
            <Link to={"/jda-ui-kit/"}>
              <li
                className={
                  page === "title"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Title Page
              </li>
            </Link>
            <Link to={"/jda-ui-kit/heading"}>
              <li
                className={
                  page === "headings"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Headings
              </li>
            </Link>
            <Link to={"/jda-ui-kit/text"}>
              <li
                className={
                  page === "text"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Text
              </li>
            </Link>
            <Link to={"/jda-ui-kit/paragraph"}>
              <li
                className={
                  page === "paragraph"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Paragraphs
              </li>
            </Link>
            <Link to={"/jda-ui-kit/button"}>
              <li
                className={
                  page === "buttons"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Buttons
              </li>
            </Link>
            <Link to={"/jda-ui-kit/card"}>
              <li
                className={
                  page === "cards"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Cards
              </li>
            </Link>
            <Link to={"/jda-ui-kit/badge"}>
              <li
                className={
                  page === "badges"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Badges
              </li>
            </Link>
            <Link to={"/jda-ui-kit/toast"}>
              <li
                className={
                  page === "toast"
                    ? style["nav__item"] + " " + style["nav__item_active"]
                    : style["nav__item"]
                }
              >
                Toast
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div></div>
    </aside>
  );
};

export default Menu;

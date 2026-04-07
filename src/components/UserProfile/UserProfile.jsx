import PropTypes from "prop-types";
import { useState, useContext } from "react";
import Icon from "@mdi/react";
import { mdiThumbUp, mdiThumbDown } from "@mdi/js";
import cx from "classnames";
import styles from "./UserProfile.module.scss";
import { ThemeContext } from "../../contexts";
import CONSTANTS from "../../constants";
const UserProfile = (props) => {
  const {
    user: { name = "Anonim", age = 100, email = "anonim@gmail.com" },
  } = props;
  const [isSelect, setIsSelect] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const changeIsSelect = () => {
    setIsSelect(!isSelect);
  };
  const addLike = (event) => {
    event.stopPropagation();
    setAmount(amount + 1);
  };
  const subLike = (event) => {
    event.stopPropagation();
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      setAmount(0);
    }
  };
  const changeIsDelete = () => {
    setIsDelete(true);
  };
  const articleClasses = cx(styles["user-profile"], {
    [styles["select"]]: isSelect,
    [styles["noselect"]]: !isSelect,
    [styles["light"]]: theme === CONSTANTS.THEME.LIGHT,
    [styles["dark"]]: theme === CONSTANTS.THEME.DARK,
  });
  if (isDelete) return null;
  return (
    <article className={articleClasses} onClick={changeIsSelect}>
      {" "}
      <h2>{name}</h2> <p>{age}</p> <p>{email}</p>{" "}
      <div>
        {" "}
        <button onClick={addLike}>
          {" "}
          <Icon path={mdiThumbUp} size={1} />{" "}
        </button>{" "}
        <span>{amount}</span>{" "}
        <button onClick={subLike}>
          {" "}
          <Icon path={mdiThumbDown} size={1} />{" "}
        </button>{" "}
      </div>{" "}
      <button onClick={changeIsDelete}>Delete</button>{" "}
    </article>
  );
};
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  }),
};
export default UserProfile;

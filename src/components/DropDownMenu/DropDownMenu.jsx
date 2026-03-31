import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./DropDownMenu.module.scss";

const DropdownMenu = (props) => {
  const { children, text, widthList } = props;

  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.parent}>
      <button onClick={changeIsOpen}>{text}</button>
      {isOpen && (
        <div style = {{width:{widthList}+"px"}} className={styles.list}>
          {children}
        </div>
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
};

export default DropDownMenu;

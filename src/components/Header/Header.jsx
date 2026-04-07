import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from "@mdi/js";
import {withTheme , withUserAccount} from '../HOCs';
import { PropTypes } from 'prop-types';
import cx from "classnames";
import styles from "./Header.module.scss";
import CONSTANTS from './../../constants';
import { Icon } from '@mdi/react';

const Header = (props) => {
  const {theme , setTheme , user: {firstName , lastName}} = props;

  const changeTheme = () => {
    setTheme(
      theme === "CONSTANTE.THEME.LIGHT"
        ? "CONSTANTE.THEME.DARK"
        : "CONSTANTE.THEME.LIGHT",
    );
  };
 const headerClasses = cx(styles.header , {
  [styles["light"]]: theme === CONSTANTS.THEME.LIGHT,
    [styles["dark"]]: theme === CONSTANTS.THEME.DARK,
 })
  return (
    <header className={headerClasses}>
      <p>hi!{firstName}</p>
      <span onClick={changeTheme} className={headerClasses}>
        {theme === "CONSTANTE.THEME.LIGHT" ? (
          <Icon path={mdiMoonWaningCrescent} size={1} />
        ) : (
          <Icon pass={mdiWhiteBalanceSunny} size={1} />
        )}
      </span>
    </header>
  );
};
Header.PropTypes = { 
  theme: PropTypes.string,
  setTheme: PropTypes.func, 
  user:PropTypes.shape({
    firstName : PropTypes.string,
    lastName: PropTypes.string,
  })
}

export default withUserAccount(withTheme(Header));

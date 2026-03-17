import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from "./DropDownMenu.module.scss"


const DropDownMenu = (props) => {
    const {children} = props;
    const [isOpen, setIsOpen] = useState(false);
    const changeIsOpen = ()=> {setIsOpen(!isOpen)}
    return (
        <div>
            <button onClick={changeIsOpen
            }>text</button>
            {isOpen && <div className={styles.list}>{children}</div>}
        </div>
    );
};


DropDownMenu.propTypes = {

};


export default DropDownMenu;

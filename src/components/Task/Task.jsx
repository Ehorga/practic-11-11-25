import React from 'react';
import PropTypes from 'prop-types';


const Task = (props) => {
    const { text, days=2} = props;
    return (
        <div>
            <p>{text}</p>
            <p>Днів на виконання : {days}</p>
        </div>
    );
};


Task.propTypes = {
text: PropTypes.string.isRequired,
days : PropTypes.number.isRequired
};


export default Task;

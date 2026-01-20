import { useState } from "react";
import PropTypes from "prop-types";
const GroupCheckBoxes = (props) => {
  const {list} = props;
  const initialState = list.reduce((acc, item) => {
  acc[item] = false;
  return acc;
}, {});
  const [items, setItems] = useState(initialState);
  const changeInterests = (event) => {
    setItems({ ...items, [event.target.name]: event.target.checked });
  };

  return (
    <div>
     {list.map((item)=>(
      <label key={item} style={{display:'block'}}>
        <input
          type="checkbox"
          name={item}
          checked={items[{item}]}
          onChange={changeInterests}
        />
        {item}
      </label>
     ))}
     <p>
      Your choose: {
        Object.keys(items).filter((key)=> items[key]).join(',')||'nothing'
      }
     </p>
    </div>
  );
};
GroupCheckBoxes.propType = {
  list: PropTypes.array
}
export default GroupCheckBoxes;

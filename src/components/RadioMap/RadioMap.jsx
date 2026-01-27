
import { useState } from 'react';
const RadioMap = (props) => {
  const { list } = props;
  const [selectUser, setSelectUser] = useState('');
  const changeSelectUser = (event) =>{
    setSelectUser(event.target.value)
  }
  return (
    <>
      {list.map((elem) => (
        <label key={elem.value} style={{ display: "block" }}>
          <input type="radio" name="same" value={elem.value} onChange={changeSelectUser}/>
          {elem.label}
        </label>
      ))}
      <p>your choose: </p>
    </>
  );
};

export default RadioMap;

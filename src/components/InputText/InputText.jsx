
import { useState } from 'react';

const InputText = () => {
    const [valueEnter, setValueEnter] = useState("");
    const changeValueEnter = (event) =>{
        console.log(event.target.value);
        setValueEnter(event.target.value)
    }
    return (
       <>
       <label>
            login:
            <input value={valueEnter} onChange={changeValueEnter}/>
        </label>
        <p>you entered:{valueEnter}</p>
        </>
    );
}

export default InputText;

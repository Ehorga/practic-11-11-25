import { useState } from "react";
const ToggleText = () => {
  const [close, setClose] = useState(true);
  const changeClose = () => {
    setClose(!close);
  };
  return (
    <div>
      <h2>
        Title <button onClick={changeClose}>{close ? "hide" : "open"}</button>
      </h2>
      {close && <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        temporibus quae perferendis beatae adipisci pariatur sed velit officiis
        quas facere aperiam aspernatur ratione architecto esse, quia sapiente
        cupiditate quaerat ipsam!
      </p>}
    </div>
  );
};

export default ToggleText;

import Wrapper from "./components/Wrapper/Wrapper";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import { useState, useEffect } from "react";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  return (
    <>
      <Wrapper>
        <Tooltip textTooltip="click button and select">
          <h2>Dropdown Menu!</h2>
        </Tooltip>

        <DropDownMenu text="hi, user!">
          <button>account</button>
          <button>logout</button>
        </DropDownMenu>

        <DropDownMenu text="type" widthList="500">
          <p>Lorem, ipsum dolor.</p>
          <p>Quo, nesciunt sapiente!</p>
          <p>Tenetur, dolore sit!</p>
        </DropDownMenu>

        <DropDownMenu text="links">
          <a href="#">lorem 1</a>
          <a href="#">lorem 2</a>
          <a href="#">lorem 3</a>
        </DropDownMenu>
      </Wrapper>
    </>
  );
}

export default App;

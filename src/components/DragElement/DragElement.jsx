import { useEffect, useState } from "react";
import styles from "./DragElement.module.scss";

const DragElement = () => {
    const [positions, setPositions] = useState({left:0 , top:0
    });
    const [hasDrag, setHasDrag] = useState(false);
    useEffect(() => {
      const changePosition=(event)=> {
       if(hasDrag){
        setPositions({left: event.clientX , top: event.clientY})
      } 
      }
      const leaveHasDrag = () => {setHasDrag(false)}
      document.addEventListener('mousemove', changePosition)
      document.addEventListener('mouseup', leaveHasDrag)
      return () => {
        document.removeEventListener('mousemove', changePosition)
        document.removeEventListener('mouseup', leaveHasDrag)
      };
    }, [hasDrag]);
    const changeHasDrag =()=>{setHasDrag(true)}
  return (
    <div
    id="drag"
    onMouseDown={changeHasDrag}
      className={styles.drag}
      style={{
        left: positions.left,
        top: positions.top,
      }}
    >
      drag
    </div>
  );
};

export default DragElement;

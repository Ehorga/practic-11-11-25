
import { useState , useEffect } from 'react';

const CoursorTraker = () => {
    const [coords, setCoords] = useState({x:0 , y:0});
    useEffect(() => {
        const changeCoords = (event) => {setCoords({x:event.clientX, y:event.clientY})}
        window.document.addEventListener('mousemove', changeCoords)
        return () => {
            window.document.removeEventListener('mousemove', changeCoords)
        };
    }, []);
    return (
        <div>
            <h2>coursor position</h2>
            <h3>X:{coords.x}</h3>
            <h3>Y:{coords.y}</h3>
        </div>
    );
}

export default CoursorTraker;

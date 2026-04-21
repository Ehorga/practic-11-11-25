import React from 'react';
import MouseTracker from '../components/MouseTracker/MouseTracker';

const AboutPage = () => {
    return (
        <section>
            <h1>About Page </h1>
            <MouseTracker render= {(position) => (<h3>x={position.x} , y={position.y}</h3>)}/>
            <MouseTracker render= {(position) => (<div style={{position:'absolute' ,top:position.y , left:position.x}}>X</div>)}/>
        </section>
    );
}

export default AboutPage;

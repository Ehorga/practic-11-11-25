import React from 'react';
import "./UserProfile.css"
const UserProfile = (props) => {
    const {name , age ,email}= props
    return (
        <article>
           <h2>name :{name}</h2> 
           <h3>age : {age}</h3>
           <p>email : {email}</p>
        </article>
    );
}

export default UserProfile;

import React from 'react';


const Friend = (props) => {
    const {name,email,phone,website,address}=props.friend;
    const friendstyle={
        border: '3px solid yellow',
        padding:'10px',
        borderRadius: '10px',
        margin:'10px'

    }
    return (
        <div style={friendstyle}>
        <h2>Name: {name}</h2>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>City: {address.city}</h4>
        </div>
    );
};

export default Friend;
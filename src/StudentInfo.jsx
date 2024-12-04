import React from 'react';
import './assets/StudentInfo.css';

function StudentInfo(props) {
    return (
        <header id="user">
            <h2>
             {props.firstName} {props.lastName}
            </h2>
            <img src={props.image} />
            <p>{props.title}</p>
        </header>
    );
}

export default StudentInfo;

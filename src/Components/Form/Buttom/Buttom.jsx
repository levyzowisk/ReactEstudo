import React from 'react';
import './Buttom.css';

function Buttom (props) {
    // console.log(props);

    return(
    <>
        <div className="buttom-form">
            <button type={props.type}> {props.text} </button>
        </div>
    </>)
}

export default Buttom;
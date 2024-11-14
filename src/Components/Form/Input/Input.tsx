import React from "react";
import './Input.css';
function InputText(props: any) {
    // console.log(props);
    
    return (
        <>
        <div className="input-container">
            {/* <label htmlFor="input"> <i className="bi bi-person user"></i> </label> */}
            <label htmlFor="input"> <i className={`${props.class} user`}></i> </label>
            <input required={props.required}  minLength={1} type={props.type}  placeholder={props.place} className="input-text" id="input"/>
        </div>
        </>
        
    )
}

export default  InputText;
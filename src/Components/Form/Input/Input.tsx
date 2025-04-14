import React, { useState } from "react";
import './Input.css';
function InputText(props: any) {

    return (
        <>
        <div className="input-container">
            {/* <label htmlFor="input"> <i className="bi bi-person user"></i> </label> */}
            <div className="eye-input">

            <label htmlFor="input"> <i className={`${props.class} user`}></i> </label> 
            
            {/* || Operador Lógico OU => Se props.maxLength for undefined, null, 0, false, NaN ou "", ele usará 100 como valor padrão*/}
            <input onBlur={props.onBlur} maxLength={props.maxLength || 100} required={props.required} name={props.name}  minLength={1} type={props.type}  placeholder={props.place} className="input-text" id="input" onChange={props.onChange}/>    
            </div>

            <i id="eye" onClick={props.onClick} className={`bi ${props.iconeye} eye`} ></i>
        </div>
        </>
        
    )
}

export default  InputText;
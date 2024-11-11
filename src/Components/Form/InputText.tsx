import React from "react";

function InputText(props: any) {
    return (
        <>
        <div className="input-container">
            <img src="" alt="" />
            <input type={props.type}  placeholder={props.place} className="input-text"/>
        </div>
        </>
    )
}

export default  InputText;

import React from "react";
import InputText from "../../Components/Form/Input/Input";
import Buttom from "../../Components/Form/Buttom/Buttom";

function Login () {

    return (
        <>
    <form action="">
        <InputText
            type = "text"
            place= "Nome"
            class= "bi bi-person"
            required = "true"

        />

        <InputText
            type = "text"
            place= "Email"
            class= "bi bi-envelope"
            required = "true"
            />

        <InputText
            type = "text"
            place = "Senha"
            class = "bi bi-file-lock"
            required = "true"

        
        />

        <Buttom
            type = "submit"
            text = "Cadastrar"
            />
    </form>
        </>
        
    )

}

export default Login;
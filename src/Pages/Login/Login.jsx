
import React from "react";
import InputText from "../../Components/Form/Input/Input";
import Buttom from "../../Components/Form/Buttom/Buttom";
import './Login.css'

function Login () {

    return (
        <>

    <div className="container">

        <div className="container-left">
            <h1>Levy Tech</h1>

            <h3>Bem-Vindo</h3>
            <h3>de volta!</h3>

            <p>Acesse sua conta agora mesmo.</p>

            <Buttom
                type = "submit"
                text = "Entrar"
            />
        </div>

        <div className="container-rigth">

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
                    type = "password"
                    place = "Senha"
                    class = "bi bi-file-lock"
                    required = "true"
            />

                <Buttom
                    type = "submit"
                    text = "Cadastrar"
                />
            </form>
        </div>
    </div>
        

        </>
        
    )

}

export default Login;
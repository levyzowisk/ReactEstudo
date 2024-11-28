
import React, { useEffect, useState } from "react";
import InputText from "../../Components/Form/Input/Input";
import Buttom from "../../Components/Form/Buttom/Buttom";
import './Login.css'

function Login () {
    const [formData, setFormData] = useState({name: "", email: "", password: ""})

    const inputChange = (event) => {
        // console.log(event.target);
        
        const {name, value} = event.target;        
        // const data = {
        //     ...formData,
        //     [name]: value
        // }
        // setFormData(data)    
        // console.log(data);
        // Pega o valor anterior e modifica de acordo com o name 
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        
    }
        console.log(formData);
    

    return (
        <>

    <div className="container">

        <div className="container-left">
            <div className="justify-content">
                <h1>Levy Tech</h1>

                <h3>Bem-Vindo <br />de volta!</h3>

                <p>Acesse sua conta agora <br /> mesmo.</p>

                <div className="buttom-entry">
                    <Buttom
                        type = "submit"
                        text = "Entrar"
                    />
                </div>

            </div>

        </div>

        <div className="container-rigth">
            <h1>Crie sua Conta</h1>

            <form action="">
                <InputText
                    type = "text"
                    place= "Nome"
                    class= "bi bi-person"
                    required = {true}
                    onChange = {inputChange}
                    name = {"name"}
                    

            />

                <InputText
                    type = "text"
                    place= "Email"
                    class= "bi bi-envelope"
                    required = {true}
                    onChange = {inputChange}
                    name = {"email"}

                />

                <InputText
                    type = "password"
                    place = "Senha"
                    class = "bi bi-file-lock"
                    required = {true}
                    onChange = {inputChange}
                    name = {"password"}
            />
            <div className="buttom-register">

                <Buttom
                        type = "submit"
                        text = "Cadastrar"
                    />
            </div>

            </form>
        </div>

    </div>

        </>
        
    )

}

export default Login;